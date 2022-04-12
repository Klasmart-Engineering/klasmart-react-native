import { ReadMeDto } from "../../dto/readMeDto";
import {
    gql,
    OperationVariables,
    QueryHookOptions,
    useQuery,
} from "@apollo/client";
import { useUserService } from "../../Context";

const QUERY_ME = gql`
    query queryMe {
        me {
            user_id
            username
            given_name
            family_name
            date_of_birth
            organizationsWithPermission(
                permission_name: "attend_live_class_as_a_student_187"
            ) {
                status
                organization {
                    organization_id
                    organization_name
                }
            }
        }
    }`;

const useMeQuery = (options?: QueryHookOptions<ReadMeDto, OperationVariables>) => {
    const { client } = useUserService();

    const query = useQuery<ReadMeDto>(QUERY_ME, {
        ...options,
        client,
    });

    return query;
};

export default useMeQuery;
