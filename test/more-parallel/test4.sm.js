//Generated on Thursday, February 21, 2013 18:44:36 by the SCION SCXML compiler







module.exports = {
    "": "http://www.w3.org/2005/07/scxml",
    "states": [
        {
            "id": "p",
            "type": "parallel",
            "states": [
                {
                    "id": "a",
                    "transitions": [
                        {
                            "event": "t",
                            "target": "a"
                        }
                    ],
                    "states": [
                        {
                            "id": "a1"
                        },
                        {
                            "id": "a2"
                        }
                    ]
                },
                {
                    "id": "b",
                    "transitions": [
                        {
                            "event": "t",
                            "target": "b"
                        }
                    ],
                    "states": [
                        {
                            "id": "b1"
                        },
                        {
                            "id": "b2"
                        }
                    ]
                }
            ]
        }
    ]
};