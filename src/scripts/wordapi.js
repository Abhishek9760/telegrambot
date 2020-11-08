const axios = require("axios");

let url = "https://salty-meadow-73644.herokuapp.com/api/"
let wordUrl = url + 'word/'
let ChatIDUrl = url + 'chatid/'

function getWordByChatID(chatid) {
    return axios.get(wordUrl+`?chatid=${chatid}`).then(res => {
        return res.data;
    }).catch(err => {
        return err;
    })
}

function getSpecificWordByChatID(chatid, word) {
    let url = wordUrl + `?chatid=${chatid}&word=${word}`
    return axios.get(url).then(res => {
        return res.data;
    }).catch(err => {
        return err;
    })
}

function createChatIDDatabase(chatid) {
    return axios.post(ChatIDUrl, data={'chat_id': chatid}).then(res => {
        return res.data;
    }).catch(err => {
        return err;
    })
}

function addWordToChatID(chatid, word) {
    return axios.post(wordUrl + `?chatid=${chatid}`, data={"word": word}).then(res => {
        return res.data;
    }).catch(err => {
        return err;
    })
}

function deleteWordFromChatID(chatid, word) {
    let url = wordUrl + `${word}/?chatid=${chatid}`;
    return axios.delete(url).then(res => {
        return res.data;
    }).catch(err => {
        return err;
    })
}

function deleteChatID(chatid) {
    let url = ChatIDUrl + `${chatid}/`;
    return axios.delete(url).then(res => {
        return res.data;
    }).catch(err => {
        return err;
    });
}

module.exports = {
    getWordByChatID,
    getSpecificWordByChatID,
    createChatIDDatabase,
    addWordToChatID,
    deleteWordFromChatID,
    deleteChatID
}