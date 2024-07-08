export interface ResponseResult<t>{
    success: boolean;
    msg: string;
    result: t;
}