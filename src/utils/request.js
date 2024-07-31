import inquirer from "inquirer";

async function getAnswers() {
  const questions = [
    {
      type: "input",
      name: "projectName",
      message: "请输入项目名称",
    },
    {
      type: "input",
      name: "projectDescription",
      message: "请输入项目描述",
    },
    {
      type: "list",
      name: "buildType",
      message: "请选择构建方式",
      choices: ["vite", "webpack"],
    },
    {
      type: "list",
      name: "language",
      message: "请选择语言",
      choices: ["typescript","javascript"],
    },
    {
      type: "list",
      name: "framework",
      message: "请选择框架",
      choices: ["react"],
    },
    {
      type: "list",
      name: "packageManager",
      message: "请选择包管理工具",
      choices: ["npm", "yarn", "pnpm"],
    },
    {
        type: "list",
        name: "uiFramework",
        message: "请选择UI框架",
        choices: ["antd", "无"],
    },
    {
        type: "list",
        name: "storeName",
        message: "请选择使用的状态管理库",
        choices: ["@extremelyjs/cli(👍)", "无"],
    }
  ];
  return inquirer.prompt(questions);
}

export {
    getAnswers
}