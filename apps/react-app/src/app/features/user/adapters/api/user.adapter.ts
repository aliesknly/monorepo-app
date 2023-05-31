import { createEntityAdapter } from "@reduxjs/toolkit";
import { UserEntity } from "../../domain/user.entity";

export const userAdapter = createEntityAdapter<UserEntity>();