boomerang.factory('Config', function () {
    return {
        /* modify these */
        'name'          : 'GDG Philadelphia', // GDG Name
        'id'            : '114727657292466806804', // GDG Google+ Page id
        'google_api'    : 'AIzaSyBJhqtINYjcavoB99Xn5YUUGD-HSIrJCT8', // Google Cloud API
        //'pwa_id'        : '', // picasa web album id, must belong to Google+ id above
        'domain'        : 'gdgphila.appspot.com', // custom domain or [your app].appspot.com
        //'youtube'       : '', // YouTube handle
        'twitter'       : 'phillygdg', // Twitter handle
        'meetup'        : 'AndroidAlliancePhilly', // MeetUp handle
        //'facebook'      : '', // Facebook handle
        //'github'        : '', // GitHub handle
        'cover' : {
            title : 'GDG Philadelphia',
            subtitle : 'Philly's own GDG Group!!,
            url : '/images/[cover image]',
            button : {
                text : 'Become a Member!',
                url : 'https://developers.google.com/groups/chapter/114727657292466806804/'
            }
        },
        'sponsors' : {
            0 : {
                id : 1,
                name : 'Google Developers',
                url : 'https://developers.google.com/',
                image : {
                    url : '../images/Google-Developers.png'
                }
            }/*,
            1 : {
                id : 2,
                name : '',
                url : 'https://',
                image : {
                    url : '../images/'
                }
            },
            2 : {
                id : 3,
                name : '',
                url : 'https://',
                image : {
                    url : '../images/'
                }
            },
            3 : {
                id : 4,
                name : '',
                url : 'https://',
                image : {
                    url : '../images/'
                }
            }*/
        }
    };
});
