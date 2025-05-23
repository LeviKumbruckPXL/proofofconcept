new Button({
    appendTo : targetElement,
    cls      : 'b-raised',
    text     : 'Show menu',
    menu     : {
        colorMenu : {
            type : 'colorpicker',
            colorSelected({ color }) {
                colorBox.style.color = color;
            }
        }
    }
});

const colorBox = DomHelper.createElement({
    parent : targetElement,
    class  : 'b-colorbox',
    style  : {
        width             : '2em',
        height            : '2em',
        color             : '#fff',
        border            : '1px solid #ccc',
        marginInlineStart : '1em'
    }
});
