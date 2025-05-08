<?php

session_start();

if (!isset($_SESSION["resources"]) || isset($_GET["reset"])) {
    // Initialize session's resource data
    $_SESSION["resources"] = [
        [
            'id'         => 'bryntum',
            'name'       => 'Bryntum team',
            'eventColor' => 'blue'
        ],
        [
            'id'         => 'hotel',
            'name'       => 'Hotel Park',
            'eventColor' => 'orange'
        ],
        [
            'id'         => 'michael',
            'name'       => 'Michael Johnson',
            'eventColor' => 'deep-orange'
        ]
    ];
}

if (!isset($_SESSION["events"]) || isset($_GET["reset"])) {
    // Initialize session's event data
    $_SESSION["events"] = [
        [
            'id'         => 1,
            'startDate'  => '2020-10-11T14:00:00',
            'endDate'    => '2020-10-18T12:00:00',
            'name'       => 'Hackathon 2020',
            'allDay'     => true,
            'resourceId' => 'bryntum',
            'eventColor' => 'green'
        ],
        [
            'id'         => 2,
            'startDate'  => '2020-10-11T14:00:00',
            'endDate'    => '2020-10-11T18:00:00',
            'name'       => 'Check-In in Hotel',
            'resourceId' => 'hotel'
        ],
        [
            'id'         => 3,
            'startDate'  => '2020-10-11T18:00:00',
            'endDate'    => '2020-10-11T20:00:00',
            'name'       => 'Relax and official arrival beer',
            'allDay'     => true,
            'resourceId' => 'michael'
        ],
        [
            'id'         => 4,
            'startDate'  => '2020-10-11T20:00:00',
            'endDate'    => '2020-10-11T21:00:00',
            'name'       => 'Dinner',
            'resourceId' => 'hotel'
        ],
        [
            'id'         => 5,
            'startDate'  => '2020-10-12T09:00:00',
            'endDate'    => '2020-10-12T10:00:00',
            'name'       => 'Breakfast',
            'resourceId' => 'hotel'
        ],
        [
            'id'         => 6,
            'startDate'  => '2020-10-12T10:00:00',
            'endDate'    => '2020-10-12T12:00:00',
            'name'       => 'Team Scrum',
            'resourceId' => 'bryntum'
        ],
        [
            'id'         => 7,
            'startDate'  => '2020-10-12T12:00:00',
            'endDate'    => '2020-10-12T14:00:00',
            'name'       => 'Scheduler Grid introduction + review',
            'resourceId' => 'bryntum'
        ],
        [
            'id'         => 8,
            'startDate'  => '2020-10-12T14:00:00',
            'endDate'    => '2020-10-12T15:00:00',
            'name'       => 'Lunch',
            'resourceId' => 'hotel'
        ],
        [
            'id'         => 9,
            'startDate'  => '2020-10-12T15:00:00',
            'endDate'    => '2020-10-12T19:00:00',
            'name'       => 'Active client project review',
            'resourceId' => 'bryntum'
        ],
        [
            'id'         => 10,
            'startDate'  => '2020-10-12T19:00:00',
            'endDate'    => '2020-10-12T20:00:00',
            'name'       => 'Dinner',
            'resourceId' => 'hotel'
        ],
        [
            'id'         => 11,
            'startDate'  => '2020-10-13T09:00:00',
            'endDate'    => '2020-10-13T10:00:00',
            'name'       => 'Breakfast',
            'resourceId' => 'hotel'
        ],
        [
            'id'         => 12,
            'startDate'  => '2020-10-13T10:00:00',
            'endDate'    => '2020-10-13T12:00:00',
            'name'       => 'Roadmapping for 2020',
            'resourceId' => 'bryntum'
        ],
        [
            'id'         => 13,
            'startDate'  => '2020-10-13T12:00:00',
            'endDate'    => '2020-10-13T14:00:00',
            'name'       => 'Review Assembla tickets and decide features to add',
            'resourceId' => 'bryntum'
        ],
        [
            'id'         => 14,
            'startDate'  => '2020-10-13T14:00:00',
            'endDate'    => '2020-10-13T15:00:00',
            'name'       => 'Lunch',
            'resourceId' => 'hotel'
        ],
        [
            'id'         => 15,
            'startDate'  => '2020-10-13T15:00:00',
            'endDate'    => '2020-10-13T19:00:00',
            'name'       => 'Active programming',
            'resourceId' => 'bryntum'
        ],
        [
            'id'         => 16,
            'startDate'  => '2020-10-13T19:00:00',
            'endDate'    => '2020-10-13T20:00:00',
            'name'       => 'Dinner',
            'resourceId' => 'hotel'
        ],
        [
            'id'         => 17,
            'startDate'  => '2020-10-14T09:00:00',
            'endDate'    => '2020-10-14T10:00:00',
            'name'       => 'Breakfast',
            'resourceId' => 'hotel'
        ],
        [
            'id'         => 18,
            'startDate'  => '2020-10-14T10:00:00',
            'endDate'    => '2020-10-14T18:00:00',
            'name'       => 'Excursion',
            'resourceId' => 'michael'
        ],
        [
            'id'         => 19,
            'startDate'  => '2020-10-14T18:00:00',
            'endDate'    => '2020-10-14T22:00:00',
            'name'       => 'Team Building',
            'resourceId' => 'michael',
            'eventColor' => 'green'
        ],
        [
            'id'         => 20,
            'startDate'  => '2020-10-15T09:00:00',
            'endDate'    => '2020-10-15T10:00:00',
            'name'       => 'Breakfast',
            'resourceId' => 'hotel'
        ],
        [
            'id'         => 21,
            'startDate'  => '2020-10-15T14:00:00',
            'endDate'    => '2020-10-15T15:00:00',
            'name'       => 'Lunch',
            'resourceId' => 'hotel'
        ],
        [
            'id'         => 22,
            'startDate'  => '2020-10-15T19:00:00',
            'endDate'    => '2020-10-15T20:00:00',
            'name'       => 'Dinner',
            'resourceId' => 'hotel'
        ],
        [
            'id'         => 23,
            'startDate'  => '2020-10-15T00:00:00',
            'endDate'    => '2020-10-16T00:00:00',
            'name'       => 'Gantt review + development',
            'allDay'     => true,
            'resourceId' => 'bryntum'
        ],
        [
            'id'         => 24,
            'startDate'  => '2020-10-16T09:00:00',
            'endDate'    => '2020-10-16T10:00:00',
            'name'       => 'Breakfast',
            'resourceId' => 'hotel'
        ],
        [
            'id'         => 25,
            'startDate'  => '2020-10-16T14:00:00',
            'endDate'    => '2020-10-16T15:00:00',
            'name'       => 'Lunch',
            'resourceId' => 'hotel'
        ],
        [
            'id'         => 26,
            'startDate'  => '2020-10-16T19:00:00',
            'endDate'    => '2020-10-16T20:00:00',
            'name'       => 'Dinner',
            'resourceId' => 'hotel'
        ],
        [
            'id'         => 27,
            'startDate'  => '2020-10-17T09:00:00',
            'endDate'    => '2020-10-17T10:00:00',
            'name'       => 'Breakfast',
            'resourceId' => 'hotel'
        ]
    ];
}

function sendError($msg) {
    die(json_encode(
        [
            "success" => false,
            "msg"     => $msg
        ]));
}

function sendData($data) {
    die(json_encode(
        [
            "success" => true,
            "data"    => $data
        ]));
}

function sendSuccess() {
    die(json_encode(
        [
            "success" => true
        ]));
}
