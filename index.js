/**
 * CV version 10.16 
 * Personal informaion
 */
const name = 'Vlad Balabash';
var age = 21,
    position = 'Front-End developer',
    contacts = {
        linkedin: 'http://bit.ly/2d4fssV',
        facebook: 'http://bit.ly/2dLneGd',
        github: 'https://github.com/vladb95',
        gmail: 'vladb951@gmail.com',
        phone: '+ 38 066 0132 880'
    };

/**
 * Expiriance list
 */
var expiriance = [
    {
        companyName: 'CIT',
        position: 'Full-Stack developer',
        timeInterval: {
            from: '04.12.2013',
            to: '31.05.2015'
        },
        projects: [
            {
                name: 'Bonus',
                description: 'the system for accounting company\'s inventory',
                contribution: 'developed back-end on asp.net MVC and created UI based on Jquery component - jqGrig'
            }, {
                name: 'JudgeOffice',
                description: 'the system for control documents of the Odessa National University',
                contribution: 'developed front-end part of project on AngularJs'
            }
        ]
    }, {
        companyName: 'Sofona',
        position: 'Front-End developer',
        timeInterval: {
            from: '01.06.2015',
            to: '30.09.2015'
        },
        projects: [
            {
                name: 'aCrm',
                description: 'partner program for financial comunity based on teleTrade group; the system is CRM service for teleTrade',
                contribution: 'took part as front-end developer; the system was developing on MEAN stack'
            }
        ]
    }, {
        companyName: 'SeoMasters',
        position: 'Full-Stack developer',
        timeInterval: {
            from: '01.10.2015',
            to: '01.05.2016'
        },
        projects: [
            {
                name: 'SmCRM',
                description: 'service for working and keeping on touch with company\'s clients',
                contribution: 'developed project on Django and AngularJS'
            }, {
                name: 'VGRP',
                description: 'the project for provision of legal services',
                contribution: 'developed project on Yii2 and Vue.Js'
            }
        ]
    }, {
        companyName: '482.solutions',
        position: 'Front-End developer',
        timeInterval: {
            from: '02.05.2016'
        },
        projects: [
            {
                name: 'GMS',
                description: 'reсruting service for sailors and businessmen',
                contribution: 'developing project on AngularJS'
            }
        ]
    }, {
        companyName: 'Personal StartUp',
        position: 'Front-End developer',
        timeInterval: {
            from: '07.2016'
        },
        projects: [
            {
                name: 'BudgetKeeper',
                description: 'the system for budget control',
                contribution: 'developing project on Angular2 and Ionic2'
            }
        ]
    },

];

/**
 *  Skills list
 */
var skills = {
    frontEnd: {
        languages: ['ES2015', 'TypeScript', 'CoffeeScript'],
        frameworks: ['AngularJS', 'Angular2', 'Vue.Js', 'Ionic', 'Ionic2'],
        buildSystems: ['Webpack', 'Gulp'],
        preAndPostProcessors: ['Jade', 'Stylus']
    },
    backEnd: {
        languages: ['PHP', 'Python', 'JS and implementations'],
        frameworks: ['Express', 'Django', 'Bottle', 'Yii2', 'Phalcon']
    },
    dataBases: {
        sql: ['postgre', 'mysql', 'mssql'],
        noSql: ['mongodb']
    }
};