/**
 * Copyright (C) 2021 THL A29 Limited, a Tencent company.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * 用于lodash.mergeWith的customizer
 * @param {any} objValue
 * @param {any} srcValue
 * @returns
 */
export function customizer(objValue: any, srcValue: any): any[];
/**
 * 检查本地有没有值
 * @param {string} key
 */
export function testKeyInLocal(key: string): boolean;
/**
 * 保存是否经典换行
 * @param {boolean} isClassicBr
 */
export function saveIsClassicBrToLocal(isClassicBr: boolean): void;
/**
 * 是否经典换行
 */
export function getIsClassicBrFromLocal(): boolean;
/**
 * 获取当前主题
 * @returns {string} 主题名
 */
export function getThemeFromLocal(fullClass?: boolean): string;
/**
 * 修改主题
 * @param {object} $cherry
 * @param {string} theme 如果没有传theme，则从本地缓存里取
 */
export function changeTheme($cherry: object, theme?: string): void;
