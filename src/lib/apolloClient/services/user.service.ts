import { UpdateUserResponse, UserResponse } from "@/domain/entities/response.entity";
import { GetUserByIdInput, UpdateUserInput } from "@/domain/interface/user.interfaec";
import { ApolloClient, NormalizedCacheObject } from "@apollo/client";
import { GET_USER_BY_ID } from "../query/userQuery";
import { UPDATE_USER_BY_ID } from "../mutation/users";

export class UserService {
    private client: ApolloClient<NormalizedCacheObject>;
  
    constructor(client: ApolloClient<NormalizedCacheObject>) {
      this.client = client;
    }
  
    async getUserById(input: GetUserByIdInput): Promise<UserResponse> {
      try {
        const { data, errors } = await this.client.query({
          query: GET_USER_BY_ID,
          variables: { id: input.id },
          fetchPolicy: 'network-only', 
        });
  
        if (errors) {
          throw new Error(errors[0].message);
        }
  
        if (!data?.users?.[0]) {
          return {
            success: true,
            user: null,
            message: 'User not found'
          };
        }
  
        return {
          success: true,
          user: data.users?.[0],
        };
      } catch (error) {
        console.error('GetUserById error:', error);
        return {
          success: false,
          message: error instanceof Error ? error.message : 'Failed to fetch user',
        };
      }
    }
  
    async updateUserById(
      id: string,
      input: UpdateUserInput
    ): Promise<UpdateUserResponse> {
      try {
        const cleanedInput = Object.fromEntries(
          Object.entries(input).filter(([_, value]) => value !== undefined)
        );
  
        const { data, errors } = await this.client.mutate({
          mutation: UPDATE_USER_BY_ID,
          variables: {
            id,
            input: cleanedInput,
          },
        });
  
        if (errors) {
          throw new Error(errors[0].message);
        }
  
        if (!data?.update_users_by_pk) {
          throw new Error('Failed to update user');
        }
  
        return {
          success: true,
          user: data.update_users_by_pk,
          message: 'User updated successfully',
        };
      } catch (error) {
        console.error('UpdateUserById error:', error);
        return {
          success: false,
          user: null as any, 
          message: error instanceof Error ? error.message : 'Failed to update user',
        };
      }
    }
  }