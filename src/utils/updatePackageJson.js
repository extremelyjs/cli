import { promises as fs } from 'fs';
import path from 'path';

// 单独抽取的函数，用于更新package.json
export async function updatePackageJson(projectPath, projectName, projectDescription) {
    try {
        const packageJsonPath = path.join(projectPath, 'package.json');
        const packageJsonContent = await fs.readFile(packageJsonPath, 'utf8');
        const packageJson = JSON.parse(packageJsonContent);

        // 修改package.json中的name字段
        packageJson.name = projectName;
        // 修改package.json中的description字段
        packageJson.description = projectDescription ?? "";

        // 将修改后的内容写回文件
        await fs.writeFile(packageJsonPath, JSON.stringify(packageJson, null, 2));
        console.log('package.json已更新');
    } catch (error) {
        console.error('更新package.json时出错:', error);
    }
}
