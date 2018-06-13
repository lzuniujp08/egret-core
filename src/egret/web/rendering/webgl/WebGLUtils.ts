//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////


/**
 * @private
 */
namespace egret.WebGLUtils {

    let canUseWebGL: boolean;

    export const checkCanUseWebGL = function (): boolean {
        if (canUseWebGL == undefined) {
            try {
                let canvas = document.createElement("canvas");
                canUseWebGL = !!window["WebGLRenderingContext"]
                    && !!(canvas.getContext("webgl") || canvas.getContext("experimental-webgl"));
            }
            catch (e) {
                canUseWebGL = false;
            }
        }
        return canUseWebGL;
    }

    export const deleteWebGLTexture = function (bitmapData): void {
        if (bitmapData) {
            let gl = bitmapData.glContext;
            if (gl) {
                gl.deleteTexture(bitmapData);
            }
        }
    }

    export let $multiTextureSize = 4;

    // export const setMultiTextureSize = function (num: number): void {
    //     $multiTextureSize = Math.ceil(num);
    // }
}