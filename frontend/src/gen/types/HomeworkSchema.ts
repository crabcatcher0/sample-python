import type { UserIdSchema } from "./UserIdSchema";

 export type HomeworkSchema = {
    /**
     * @type string
    */
    title: string;
    assigned_by: UserIdSchema;
};