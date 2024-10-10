import { BaseModelDto } from "src/features/external/core/stemshell.api/src/features/crud/base-model.dto"

export interface ReadUserDto extends BaseModelDto {
    username:string
}