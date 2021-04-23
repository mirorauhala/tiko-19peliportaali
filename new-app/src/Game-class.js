export default class Game {
    constructor(groupid, gameName, description, description_en, category_en, category, downloadUrl, downloadGoogleUrl, winner) {
        this.groupid = groupid
        this.gameName = gameName
        this.background = this.setbackground(groupid)
        this.description = description
        this.description_en = description_en
        this.url = this.setUrl(groupid)
        this.category = category
        this.category_en = category_en
        this.downloadUrl = downloadUrl
        this.downloadGoogleUrl = downloadGoogleUrl
        this.winner = winner
    }
    setbackground(groupid) {
        let backgroundUrl = `${process.env.PUBLIC_URL}/logos/` + this.groupid + `_pelilogo.png`
        return backgroundUrl
    } 
    setUrl(groupid) {
        let url = 'http://' + groupid + '.projects.tamk.fi/'
        return url
    }
}