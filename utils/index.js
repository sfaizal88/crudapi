const isKeyExists = (list, key) => {
    console.log("list e: ", list)
    console.log("key e: ", key)
    return list.find(item => item.key == key);
}

module.exports = {
    isKeyExists
}