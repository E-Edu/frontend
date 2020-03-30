export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
    ID: string;
    String: string;
    Boolean: boolean;
    Int: number;
    Float: number;
    Long: any;
};

export type Difficulty = {
    __typename?: 'Difficulty';
    difficultyId?: Maybe<Scalars['Int']>;
    displayName?: Maybe<Scalars['String']>;
};

export type JwtRequest = {};

export type JwtResult = {
    __typename?: 'JwtResult';
    token?: Maybe<Scalars['String']>;
    status?: Maybe<Scalars['String']>;
};

export enum JwtStatus {
    Invalid = 'INVALID',
    Expired = 'EXPIRED',
    Verified = 'VERIFIED',
}

export type Lecture = {
    __typename?: 'Lecture';
    lectureId?: Maybe<Scalars['Int']>;
    displayName?: Maybe<Scalars['String']>;
    module?: Maybe<Module>;
};

export type Module = {
    __typename?: 'Module';
    moduleId?: Maybe<Scalars['Int']>;
    displayName?: Maybe<Scalars['String']>;
    subject?: Maybe<Subject>;
};

export type Mutation = {
    __typename?: 'Mutation';
    authenticate?: Maybe<UserAuthResult>;
    jwt?: Maybe<JwtResult>;
};

export type MutationAuthenticateArgs = {
    userAuth?: Maybe<UserAuth>;
};

export type MutationJwtArgs = {
    jwtRequest?: Maybe<JwtRequest>;
};

export type Query = {
    __typename?: 'Query';
    serviceInfoByName?: Maybe<Service>;
    taskById?: Maybe<Task>;
    taskTypeById?: Maybe<TaskType>;
    subjectById?: Maybe<Subject>;
    moduleById?: Maybe<Module>;
    lectureById?: Maybe<Lecture>;
    difficultyById?: Maybe<Difficulty>;
    userByUserId?: Maybe<User>;
    userByUserName?: Maybe<User>;
    userByEmail?: Maybe<User>;
    ticketByTicketId?: Maybe<Ticket>;
};

export type QueryServiceInfoByNameArgs = {
    name?: Maybe<Scalars['String']>;
};

export type QueryTaskByIdArgs = {
    taskId?: Maybe<Scalars['Int']>;
};

export type QueryTaskTypeByIdArgs = {
    taskId?: Maybe<Scalars['Int']>;
};

export type QuerySubjectByIdArgs = {
    subjectId?: Maybe<Scalars['Int']>;
};

export type QueryModuleByIdArgs = {
    moduleId?: Maybe<Scalars['Int']>;
};

export type QueryLectureByIdArgs = {
    lectureId?: Maybe<Scalars['Int']>;
};

export type QueryDifficultyByIdArgs = {
    difficultyId?: Maybe<Scalars['Int']>;
};

export type QueryUserByUserIdArgs = {
    userId?: Maybe<Scalars['ID']>;
};

export type QueryUserByUserNameArgs = {
    firstName?: Maybe<Scalars['String']>;
    lastName?: Maybe<Scalars['String']>;
};

export type QueryUserByEmailArgs = {
    email?: Maybe<Scalars['String']>;
};

export type QueryTicketByTicketIdArgs = {
    ticketId?: Maybe<Scalars['Int']>;
};

export type Service = {
    __typename?: 'Service';
    name?: Maybe<Scalars['String']>;
    version?: Maybe<Scalars['String']>;
    commit?: Maybe<Scalars['String']>;
    buildTime?: Maybe<Scalars['Long']>;
};

export type Subject = {
    __typename?: 'Subject';
    subjectId?: Maybe<Scalars['Int']>;
    displayName?: Maybe<Scalars['String']>;
};

export type Task = {
    __typename?: 'Task';
    taskId?: Maybe<Scalars['Int']>;
    task?: Maybe<Scalars['String']>;
    author?: Maybe<User>;
    necessaryPoints?: Maybe<Scalars['Int']>;
    taskType?: Maybe<TaskType>;
    lecture?: Maybe<Lecture>;
    difficulty?: Maybe<Difficulty>;
};

export type TaskType = {
    __typename?: 'TaskType';
    taskTypeId?: Maybe<Scalars['Int']>;
    displayName?: Maybe<Scalars['String']>;
};

export type Ticket = {
    __typename?: 'Ticket';
    ticketId?: Maybe<Scalars['Int']>;
    task?: Maybe<Task>;
    title?: Maybe<Scalars['String']>;
    description?: Maybe<Scalars['String']>;
    ticketType?: Maybe<TicketType>;
};

export enum TicketType {
    None = 'NONE',
}

export type User = {
    __typename?: 'User';
    userId?: Maybe<Scalars['ID']>;
    firstName?: Maybe<Scalars['String']>;
    lastName?: Maybe<Scalars['String']>;
    createdAt?: Maybe<Scalars['String']>;
    email?: Maybe<Scalars['String']>;
    role?: Maybe<Scalars['Int']>;
    status?: Maybe<Scalars['Int']>;
};

export class UserAuth {
    passwordHash?: string;

    key?: string;
}

export type UserAuthResult = {
    __typename?: 'UserAuthResult';
    result?: Maybe<UserAuthResultType>;
};

export enum UserAuthResultType {
    Success = 'SUCCESS',
    UserNotFound = 'USER_NOT_FOUND',
    AuthenticationFailed = 'AUTHENTICATION_FAILED',
    Maintenance = 'MAINTENANCE',
}
