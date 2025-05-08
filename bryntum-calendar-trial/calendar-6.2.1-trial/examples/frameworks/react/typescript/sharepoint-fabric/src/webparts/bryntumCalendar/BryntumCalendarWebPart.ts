/* eslint-disable @typescript-eslint/explicit-function-return-type,@typescript-eslint/no-unused-vars */

import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
    IPropertyPaneConfiguration,
    PropertyPaneTextField,
    PropertyPaneDropdown,
    PropertyPaneButton,
    IPropertyPaneDropdownOption,
    PropertyPaneChoiceGroup
} from '@microsoft/sp-property-pane';

import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

import { getSP } from './pnpjsConfig';

import * as strings from 'BryntumCalendarWebPartStrings';
import App from './components/App';

import DataService from './data/DataService';
import BaseService from './data/service/BaseService';

// Allow using multiple self-contained Bryntum components on the same page
(globalThis.bryntum ??= {}).silenceBundleException = true;

export interface IBryntumCalendarWebPartProps {
    description: string // Description set in the header and used for tasklist creation
    listId: string // The list guid
    disableCreateTaskList: boolean // Set to false to disable tasklist creation
    demoData: string // Single or full demo
}

export default class BryntumCalendarWebPart extends BaseClientSideWebPart <IBryntumCalendarWebPartProps> {

    private taskLists: IPropertyPaneDropdownOption[] = [];
    private service: BaseService;

    public render(): void {
        const element = React.createElement(
            App,
            {
                title       : this.context.pageContext.web.title,
                service     : this.service,
                description : this.properties.description,
                listId      : this.properties.listId
            }
        );
        ReactDom.render(element, this.domElement);
    }

    protected async onInit(): Promise<void> {
        await super.onInit();

        // Get the Service, Mock or Remote SPService
        this.service = DataService.getService(this.context);

        // When running on the SharePoint tenant
        getSP(this.context);

        this.properties.disableCreateTaskList = false;

        // Get all available TaskLists and trigger load
        this.loadTaskLists().catch(err => alert(err.message));
    }

    /**
     * Get available tasklists. Sets the retrieved items in the dropdown box in the PropertyPane.
     * On callback the default or saved listId will be loaded.
     */
    private async loadTaskLists(): Promise<void> {
        // Sets the retrieved items on the PropertyPaneDropDown automatically setting attached `listId` which will cause the default(set) list load
        this.taskLists = await this.service.getTaskLists();
    }

    /**
     * Create a demolist or ensure it exists on the SharePoint tenant.
     * On callback the newly created list is loaded by setting `listId` after refreshing the available tasklists.
     */
    private async ensureTaskList() {
        this.properties.disableCreateTaskList = true;

        const guid = await this.service.ensureList(this.properties.description + 'DemoData', this.properties.demoData);

        await this.loadTaskLists();

        this.properties.disableCreateTaskList = false;
        this.properties.listId = guid;
        this.service.listId = guid;
        this.context.propertyPane.refresh();

        return true;
    }

    protected onDispose(): void {
        ReactDom.unmountComponentAtNode(this.domElement);
    }

    protected get dataVersion(): Version {
        return Version.parse('1.0');
    }

    /**
     * The PropertyPane with items for the WebPart configuration.
     * - Description field
     * - Dropdown field containing all available tasklists with `Bryntum demo` mentioned in the description
     * - Create button for a new demo tasklist. The name of the list is set in the PropertyPane Description field.
     */
    protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
        return {
            pages : [
                {
                    header : {
                        description : strings.PropertyPaneDescription
                    },
                    groups : [
                        {
                            groupName   : strings.BasicGroupName,
                            groupFields : [
                                PropertyPaneTextField('description', {
                                    label : strings.DescriptionFieldLabel
                                }),
                                PropertyPaneDropdown('listId', {
                                    label       : strings.TaskListDropdownLabel,
                                    options     : this.taskLists,
                                    selectedKey : this.properties.listId
                                }),
                                 PropertyPaneChoiceGroup('demoData', {
                                    label   : strings.DemoDataFieldLabel,
                                    options : [
                                        { key : 'single', text : strings.DemoDataFieldOption1 },
                                        { key : 'fulldemo', text : strings.DemoDataFieldOption2 }
                                    ]
                                }),
                                PropertyPaneButton('createTaskList', {
                                    text     : strings.TaskListButtonCreateLabel + this.properties.description + 'Demo',
                                    onClick  : this.ensureTaskList.bind(this),
                                    disabled : this.properties.disableCreateTaskList
                                })
                            ]
                        }
                    ]
                }
            ]
        };
    }
}
