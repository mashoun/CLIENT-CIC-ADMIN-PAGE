import { defineStore } from "pinia";

export const useStore = defineStore('store', {
    state: () => ({

        username: '',
        password: '',
        isLogedIn: false,

        profile: {

            "contact": {
                "email": "info@mashoun.com",
                "number": "",
                "address": "",
                "facebook": "",
                "instagram": "",
                "tiktok": "",
                "linkedin": "",
                "getStartedUrl": ""
            },
            "media": [
                {
                    "id": "",
                    "date": "",
                    "thumbnail": "",
                    "index": ""
                }
            ],
            "partners": [
                {
                    "id": "",
                    "date": "",
                    "thumbnail": "",
                    "index": ""
                },
            ],
            "workshops": [
                {
                    "id": "",
                    "date": "",
                    "thumbnail": "",
                    "title": "",
                    "description": "",
                    "index": ""
                }
            ],
            "majors": [
                {
                    "id": "",
                    "date": "",
                    "thumbnail": "",
                    "title": "",
                    "description": "",
                    "index": ""
                }
            ],
            "fees": [
                {
                    "id": "",
                    "date": "",
                    "degree": "",
                    "credits": "",
                    "applicationFees": "",
                    "downPayment": "",
                    "p18Month": "",
                    "totalFees": "",
                    "index": ""
                },
            ]

        }



    }),
    actions: {

        getApi() {
            return 'https://script.google.com/macros/s/AKfycbyoNuVRAkF9QlYVpvwu1GooLe4LP9L2O94c-UiCbJty9KQAnzwaOltRpF2tbtAvXb7W/exec'
        },

    }
})