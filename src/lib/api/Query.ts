import ApolloClient, {gql} from 'apollo-boost';
import {UserAuth} from "./model/Model";

const API_URL = "https://api.e-edu.the-morpheus.de/graphql";
/*const API_URL = "http://steve.de/graphql";*/

export default class Query {

    static client = new ApolloClient({uri: API_URL});

    public static async queryGQL(query: any): Promise<any> {
        return Query.client.query({query: query});
    }

    public static async mutationGQL(mutation: any): Promise<any> {
        return await Query.client.mutate({mutation: mutation});
    }

}
