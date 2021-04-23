import React from 'react'
import androidLogo from './img/android.png'
import tikoLogoEn from './img/tiko_en.png'
import tikoLogoFi from './img/tiko_fi.png'
import './css/games.css'

export class FiText {
    textFi = (
        <span className="defaultTexts">
            <img alt="" src={tikoLogoFi} style={{filter: 'invert(1)'}} /><hr/>
            TAMKin tietojenkäsittelyn tutkinto-ohjelman ensimmäisen vuoden opiskelijat ovat tehneet kaikki näillä sivuilla esiteltävät pelit. Pelit on tehty kevätlukukauden mittaisessa peliprojektissa, jossa on tänä keväänä (2020) ollut asiakkaana Opi ravinteista! -hanke. Voit tutustua projektiin tarkemmin <a href="/#/about">TIETOA</a> -sivulla.
            <hr/>
            Pelit on tehty Android-mobiilialustalla käyttäen Java-ohjelmointikieltä. Käytössä on myös LibGDX-viitekehys, joka mahdollistaa monipuolisen pelikehityksen.
            <img alt="" src={androidLogo} />
        </span>
    )
    navi = {
        title: 'Peliportaali',
        games: 'Pelit',
        about: 'Tietoa',
        webinar: 'Webinaari 4.5.',
        download: 'Lataa',
        language: 'In English'
    }
    about = {
        pageTitle: 'Tietoa',
        pTitle: 'Yleisesti',
        par1: 'TAMKin tietojenkäsittelyn tutkinto-ohjelmassa aloittaa vuosittain noin 90 opiskelijaa. Tutkinto-ohjelman ensimmäisen vuoden kevään opintojaksot linkittyvät laajaan ketterin projektinhallintamenetelmin toteutettuun tuotekehitysprojektiin.',
        par2: 'Tämän kevään (kevät 2020) toimeksiantona on kehittää mobiilipelejä TAMKin ja eri yhteistyökumppaneiden hankkeelle nimeltä Opi ravinteista! (ORAS). Opiskelijat ovat tehneet peliprojektia tammikuusta lähtien. Hankkeelle tehtyjen pelien tavoitteena on innostaa tutustumaan ravinteiden kierrätykseen kolmen eri osa-alueen osalta (alkutuotanto, kulutus ja jäte). Pelien kohderyhmänä ovat nuoret yläasteikäiset sekä toisen asteen opiskelijat ja ammattikorkeakouluopiskelijat. ',
        par3: 'Projektissa valmistuneisiin peleihin liittyen pidetään peliprojektin webinaari maanantaina 4.5.2020 klo 12.00-13.30 välisenä aikana. Webinaarin ohjelma julkaistaan näillä sivuilla 29.4. Voit tutustua peleihin ennakkoon 30.4. lähtien ja äänestää mielestäsi parasta peliä. Äänestäjien kesken arvotaan lahjakortti.',
        orasTitle: 'Opi ravinteista!',
        oraspar1: 'Ravinteet kuuluvat jokaisen elollisen elämään. Elintarvikkeet, aina raaka-ainetuotannosta jatkojalostuksen kautta lautaselle ja siitäkin vielä eteenpäin, ovat ravinteita. Ruokaa tuotetaan, jalostetaan, syödään. Ruuan jäämät kulkeutuvat osin jätevesijärjestelmän mukana jätevesilaitoksille tai kuivakäymäläjätteeksi. Ruuan käyttämättä jääneet osat ovat biojätettä, kompostin raaka-ainetta.',
        oraspar2: 'Jotta jokainen voisi tutustua ravinteiden kiertoon, Tampereen ammattikorkeakoulun tietojenkäsittelyn opiskelijat ovat tehneet ravinnekiertoon liittyviä mobiilipelejä. Pelaamalla pelejä voit harjoitella ruoantuotantoon, -kulutukseen ja jätteisiin liittyvää ravinteiden käyttöä ja kierrätystä.',
        oraspar3: 'Opi ravinteista! (ORAS) -hankkeen materiaalien työstämisessä on opiskelijoiden apuna olleet opettajien lisäksi eri alojen asiantuntijat.',
        buttonText: 'Peleihin!'
    }
    games = {
        pageTitle: 'Pelit',
        defaultTitle: 'Peleistä',
        defaultText: this.textFi,
        tableTitle: 'Pelitaulukko',
        tableShowMore: 'Näytä lisää',
        tableVisitSite: 'Vieraile pelin sivustolla',
        vote: 'Äänestä suosikkipeliäsi 30.4.-3.5.! Voit voittaa lahjakortin!',
        voteFinished: 'Äänestys päättynyt! Suosikkipeliäänestykseen liittyvä lahjakortin arvonta osui Vesilahteen.'
    }
    footer = {
        title: 'Linkit',
        link1: 'Tampereen Ammattikorkeakoulu'
    }
    filterButtons = {
        all: 'Kaikki',
        primary: 'Alkutuotanto',
        consumption: 'Kulutus',
        waste: 'Jäte'
    }
    webinarTitles = {
        pageTitle: 'Webinaarin aikataulu 4.5.2020',
        clock: 'Aika',
        subject: 'Aihe',
        speakers: 'Puhujat',
        webinarLink: 'Liity Webinaariin tästä!'
    }
    webinar = [
        { clock: '12:00', 
        what: 'Alkupuheenvuorot, ORAS-hanke ja tietojenkäsittelyn tutkinto-ohjelma', 
        who: 'Eija Raimovaara (HAMK) ja Toni Männistö (TAMK)'},
        { clock: '12:10', 
        what: 'Ravinteiden kierrätys. Koskeeko asia minua?', 
        who: 'Kati Berninger (Ph.D. Tutkimusjohtaja, Tyrsky Consulting)'},
        { clock: '12:20', 
        what: 'Puheenvuoro peliammattilaiselta/ICT-ammattilaiselta tuleville peliammattilaisille', 
        who: 'Webinaarivieraat pelitaloista'},
        { clock: '12:30', 
        what: 'Yleisiä kommentteja peliprojektista ja peleistä', 
        who: 'ORAS-asiakastiimin (HAMK, Lapin AMK, Sykli, TAMK) puolesta Kaisa Tolonen'},
        { clock: '12:35', 
        what: 'Opiskelijapuheenvuoro. Opiskelijan näkökulma peliprojektista', 
        who: 'Hannu Timonen (TAMK)'},
        { clock: '12:40', 
        what: 'Kysymyksiä ja vastauksia sessio', 
        who: ''},
        { clock: '13:00', 
        what: 'Palkintojenjako - palkitaan parhaat pelit', 
        who: ''},
        { clock: '13:30', 
        what: 'Webinaari päättyy', 
        who: ''},
    ]
    download = {
        pageTitle: 'Lataamo',
        infoText: 'Jos varsinainen Googlen Play-kaupan latauslinkki ei vielä toimi, voit ladata pelit omaan mobiililaitteeseesi näiden linkkien kautta. Huomioi, että peli ladataan muualta kuin Play-kaupasta, jolloin sinun tulee antaa lupa pelin asentamiseen omaan laitteeseesi. Voit tehdä asennuksen turvallisin mielin ladatessasi pelit tältä sivulta.'
    }
    gameinfo = {
        tableTitle1: 'Logo',
        tableTitle2: 'Peli',
        tableTitle3: 'Lataa',
        category: 'Kategoria: ',
        showInfo: 'Näytä lisää',
        hideInfo: 'Piilota info',
        tableDownload: 'Lataa täältä',
        tableGoogle: 'Lataa Google Playstä',
        visit: 'Vieraile pelin sivuilla'
    }
    gettoknow = {
        title: 'Tutustu peliprojektiin',
        p1: 'Esituotantovaihe / Sprintti 0',
        p2: 'Peli-ideoiden jatkojalostus / Sprintti 1',
        p3: 'Jotain näkyvää peleistä / Sprintti 2',
        p4: 'Etänä työskentely alkaa / Sprintti 3',
        p5: 'Toimivat versiot peleistä / Sprintti 4',
        p6: 'Seuraa peliprojektia Instagramissa',
        p7: 'Peliprojektin Facebook'
    }
    prize = {
        title: 'Palkintojen voittajat',
        voteWinner: 'Yleisöäänestyksen voittaja',
        gameWinner: 'Pelitalojen valitsema peli',
        customerWinner: 'Asiakkaan valitsema peli'
    }
}


export class EnText {
    textEn = (
        <span className="defaultTexts">
            <img alt="" src={tikoLogoEn} style={{filter: 'invert(1)'}} /><hr/>
            The first year students of TAMK's degree program in computer science have made all the games presented on these pages. The games have been made in a game project lasting the spring semester, where this spring (2020) has been a customer Learn about nutrients! -project. You can learn more about the project on the <a href="/#/about"> ABOUT </a> page.
            <hr/>
            Games are made for the Android mobile platform using Java programming language. The games also use LibGDX framework, which helps creating diverse games.
            <img alt="" src={androidLogo} />
        </span>
    )
    navi = {
        title: 'Game Portal',
        games: 'Games',
        about: 'About',
        webinar: 'Webinar 4.5.',
        download: 'Download',
        language: 'Suomeksi'
    }
    about = {
        pageTitle: 'About',
        pTitle: 'In general',
        par1: 'Approximately 90 students start each year at TAMK´s Business Information Systems degree program. The first year´s spring courses are linked to a product development project implemented through extensive agile project management methods.',
        par2: "This spring's (spring 2020) assignment is to develop mobile games for TAMK's and various partners' project called Learn about nutrients! (ORAS). Students have been doing a game project since January. The aim of the games made for the project is to educate players on nutrient recycling in three different areas (primary production, consumption and waste). The target group of the games is young secondary school students as well as secondary school students and polytechnic students.",
        par3: "In connection with the games completed in the project, a webinar of the game project will be held on Monday, May 4, 2020 from 12:00 to 13:30. The webinar program will be published on these pages on 29.4. You can get acquainted with the games in advance on April 30th. and vote for the game you think is best. A gift card will be drawn among the voters.",
        orasTitle: 'Learn about nutrients!',
        oraspar1: 'Nutrients belong to the life of every living thing. Food, from raw material production through further processing to the plate and beyond, are nutrients. Food is produced, processed, eaten. Food residues are partly transported with the sewage system to sewage plants or as dry toilet waste. The unused parts of the food are biowaste, the raw material for compost. ',  
        oraspar2: "In order for everyone to get acquainted with the nutrient cycle, Tampere University of Applied Sciences' computer science students have made mobile games related to the nutrient cycle. By playing games, you can practice the use and recycling of nutrients related to food production, consumption and waste. ",
        oraspar3: 'Learn about nutrients! In addition to teachers, experts from various fields have assisted students in developing the materials for the (ORAS) project. ',       
        buttonText: 'Just take me to the games!'
    }
    games = {
        pageTitle: 'The Games',
        defaultText: this.textEn,
        defaultTitle: 'About the games',
        tableTitle: 'Game Table',
        tableShowMore: 'Show More',
        tableVisitSite: 'Visit Game Site',
        category: 'Category: ',
        vote: 'Vote for your favorite game 30.4.-3.5.! You can win a gift card!',
        voteFinished: 'Voting has ended! The gift card went to Vesilahti.'
    }
    footer = {
        title: 'Links',
        link1: 'Tampere University of Applied Sciences'
    }
    filterButtons = {
        all: 'All',
        primary: 'Primary Production',
        consumption: 'Consumption',
        waste: 'Waste'
    }
    webinarTitles = {
        pageTitle: 'Webinar schedule 4.5.2020',
        clock: 'Time',
        subject: 'Subject',
        speakers: 'Speakers',
        webinarLink: 'Join the webinar here!',
    }
    webinar = [
        { clock: '12:00', 
        what: 'Opening remarks, ORAS project and degree program in computer science', 
        who: 'Eija Raimovaara (HAMK) and Toni Männistö (TAMK)'},
        { clock: '12:10', 
        what: 'Nutrient recycling. Does this concern me?', 
        who: 'Kati Berninger (Ph.D. Research Director, Tyrsky Consulting)'},
        { clock: '12:20', 
        what: 'Speech by gaming professionals / ICT professionals from gaming professionals', 
        who: 'Webinar guests from gaming houses'},
        { clock: '12:30', 
        what: 'General comments on the game project and games', 
        who: 'on behalf of the ORAS customer team (HAMK, Lapland University of Applied Sciences, Sykli, TAMK) Kaisa Tolonen'},
        { clock: '12:35', 
        what: "Student speech. Student's perspective on the game project", 
        who: 'Hannu Timonen (TAMK)'},
        { clock: '12:40', 
        what: 'Questions and Answers session', 
        who: ''},
        { clock: '13:00', 
        what: 'Prize giving - the best games will be awarded', 
        who: ''},
        { clock: '13:30', 
        what: 'The webinar ends', 
        who: ''},
    ]
    download = {
        pageTitle: 'Download',
        infoText: "If the actual Google Play Store download link doesn't work yet, you can download games to your mobile device through these links. Please note that the game will be downloaded from outside the Play Store, in which case you must give permission to install the game on your own device. You can safely install by downloading games from this page."
    }
    gameinfo = {
        tableTitle1: 'Logo',
        tableTitle2: 'Game',
        tableTitle3: 'Download',
        category: 'Category: ',
        showInfo: 'Show More',
        hideInfo: 'Hide Info',
        tableDownload: 'Download here',
        tableGoogle: 'Download from Google Play',
        visit: 'Visit Game Site'
    }
    gettoknow = {
        title: 'Get to know the game project',
        p1: 'Pre-production phase / Sprint 0',
        p2: 'Further development of game ideas / Sprint 1',
        p3: 'Something prominent about the games / Sprint 2',
        p4: 'Working remotely begins / Sprint 3',
        p5: 'Working versions of the games / Sprint 4',
        p6: 'Follow the game project in Instagram',
        p7: 'Game project Facebook'
    }
    prize = {
        title: 'Prize winners',
        voteWinner: 'Winner of the public vote',
        gameWinner: 'Game chosen by the gaming houses',
        customerWinner: 'Game chosen by the customer'
    }
}