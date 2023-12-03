import { Technology } from './types';

export function getTechColor(technology: Technology) {
    switch (technology) {
        case Technology.C: return '#DFFFD8';
        case Technology.Compiler: return '#EA8FEA';
        case Technology.Firebase: return '#E5E29F';
        case Technology.Java: return '#F0EDD4';
        case Technology.Kotlin: return '#F8E2CF';
        case Technology.MySql: return '#F3C5C5';
        case Technology.OS: return '#98EECC';
        case Technology.Scala: return '#E5B299';
        case Technology.AWSAmplify: return '#9DFFF9';
        case Technology.JavaScript: return '#1AFFD5';
        case Technology.ReactNative: return '#C9E4CA';
        case Technology.WordPress: return '#D4DCFF'; 
        default: return '#fff';
    };
}