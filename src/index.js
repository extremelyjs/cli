#!/usr/bin/env node

import { downloadUrlList } from "./contants/url.js";
import { getAnswers } from "./utils/request.js";
import download from "download-git-repo";
import fs from "fs";
import { updatePackageJson } from "./utils/updatePackageJson.js";

const answers = await getAnswers();

console.log("准备按照如下配置进行配置项目...")
console.log(answers);
console.log("请耐心等待...");

if (fs.existsSync(`./${answers?.projectName}`)) {
    console.error("项目已存在，请先删除");
    // 异常退出
    process.exit(1);
}

if (
    answers.uiFramework === "antd"
    && answers.storeName === "@apiknight/store(👍)"
    && answers.language === "typescript"
    && answers.buildType === "vite"
) {
    download(downloadUrlList.template_1, `./${answers?.projectName}`, async function (err) {
        console.log(err ? err : '初始化成功!正在修改配置...');
        await updatePackageJson(`./${answers?.projectName}`,answers.projectName,answers.projectDescription);
        console.log("配置完成");
    })
}

else if (
    answers.uiFramework === "antd"
    && answers.storeName === "@apiknight/store(👍)"
    && answers.language === "typescript"
    && answers.buildType === "webpack"
) {
    download(downloadUrlList.template_2, `./${answers?.projectName}`, async function (err) {
        console.log(err ? err : '初始化成功!正在修改配置...');
        await updatePackageJson(`./${answers?.projectName}`,answers.projectName,answers.projectDescription);
        console.log("配置完成");
    })
}

else if (
    answers.uiFramework === "无"
    && answers.storeName === "@apiknight/store(👍)"
    && answers.language === "typescript"
    && answers.buildType === "webpack"
) {
    download(downloadUrlList.template_3, `./${answers?.projectName}`, async function (err) {
        console.log(err ? err : '初始化成功!正在修改配置...');
        await updatePackageJson(`./${answers?.projectName}`,answers.projectName,answers.projectDescription);
        console.log("配置完成");
    })
}

else {
    console.log("暂不支持该配置");
    process.exit(1);
}

