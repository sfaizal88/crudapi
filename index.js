/**
 * Entry file
 * @author - Faizal
 * @date - 15 November 2024
 */
const express = require("express");
const bodyParse = require("body-parser");
const utils = require("./utils");
const app = express();
app.use(bodyParse.json());
// app.use(bodyParse.urlencoded({ extended: true }));
const port = 8080;

// LOCAL VARIABLE
let list = [];

// POST METHOD
app.post("/keyManage", (req, res) => {
// app.get("/add", (req, res) => {
    try {
        console.log("req.body: ", req.body)
        const param = req.body;
        const key = param.key;
        const value = param.value;
        if (key && value) {
            if (!utils.isKeyExists(list, key)) {
                list.push({key, value})
                console.log("Updated list after add prcoess: ", list);
                res.status(200).json({message: `Successfully added key: ${key} and value: ${value}`});
            } else {
                res.status(500).json({message: `Key already exists. Please provide different key`});
            }
        } else {
            res.status(500).json({message: `Please provide valid key and value.`});
        }
    } catch (err) {
        console.log("Error occured: ", err);
        res.status(500).json({message: `Error occur: ${err}`});
    }
});

// PUT METHOD
app.put("/keyManage", (req, res) => {
// app.get("/updateByKey", (req, res) => {
    try {
        const param = req.body;
        const key = param.key;
        const value = param.value;
        if (key && value) {
            if (utils.isKeyExists(list, key)) {
                list = list.map(item => {
                    return {key: item.key, value: key == item.key ? value : item.value}
                });
                console.log("Updated list after update prcoess: ", list);
                res.json({message: `Successfully added key: ${key} and value: ${value}`});
            } else {
                res.json({message: `Key doesnt exists. Please provide proper key`});
            }
        } else {
            res.json({message: `Please provide valid key and value.`});
        }
        console.log("param: ", param);
        res.json({message: "Success"});
    } catch (err) {
        console.log("Error occured: ", err);
        res.status(500).json({message: `Error occur: ${err}`});
    }
});

// DELETE METHOD
app.delete("/keyManage", (req, res) => {
// app.get("/delete", (req, res) => {
    try {
        const {key} = req.query;
        console.log(list);
        const isExists = utils.isKeyExists(list, key);
        if (isExists) {
            list = list.filter(item => item.key != key);
            console.log("Updated list after delete prcoess: ", list);
            res.json({message: `Key: ${key} successfully deleted`});
        } else {
            res.json({message: `Key doesnt exists. Please provide correct key`});
        }
    } catch (err) {
        console.log("Error occured: ", err);
        res.status(500).json({message: `Error occur: ${err}`});
    }
});

// GET METHOD
app.get("/keyManage", (req, res) => {
    try {
        const {key} = req.query;
        console.log("key: ", key);
        console.log("list: ", list);
        const isExists = utils.isKeyExists(list, key);
        console.log("isExists: ", isExists);
        if (isExists) {
            console.log(`Correct data for key: ${key} is ${isExists.value}`);
            res.json({message: `Value for the Key: ${key} is ${isExists.value}`});
        } else {
            res.json({message: `Key doesnt exists. Please provide correct key`});
        }
    } catch (err) {
        console.log("Error occured: ", err);
        res.status(500).json({message: `Error occur: ${err}`});
    }
});

app.listen(port, () => {
    console.log("listening....");
})