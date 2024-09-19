import type { HomeworkSchema } from "./HomeworkSchema";

 /**
 * @description OK
*/
export type CoreApiListHomeworks200 = HomeworkSchema[];
/**
 * @description OK
*/
export type CoreApiListHomeworksQueryResponse = HomeworkSchema[];
export type CoreApiListHomeworksQuery = {
    Response: CoreApiListHomeworksQueryResponse;
};