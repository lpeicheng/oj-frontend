/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { JudgeCase } from './JudgeCase';
import type { JudgeConfig } from './JudgeConfig';
import type { UserVO } from './UserVO';

export type QuestionVO = {
    acceptedNum?: number;
    answer?: string;
    content?: string;
    createTime?: string;
    id?: number;
    isDelete?: number;
    judgeCase?: JudgeCase;
    judgeConfig?: JudgeConfig;
    submitNum?: number;
    tags?: Array<string>;
    title?: string;
    updateTime?: string;
    userVO?: UserVO;
};
