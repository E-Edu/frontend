import ApolloClient from 'apollo-boost';

const API_URL = 'https://api.gewia.com/graphql';
/* const API_URL = "http://steve.de/graphql"; */

export default class Query {
    static client = new ApolloClient({ uri: API_URL });

    public static async queryGQL(query: any): Promise<any> {
        return Query.client.query({ query });
    }

    public static async mutationGQL(mutation: any): Promise<any> {
        return await Query.client.mutate({ mutation });
    }
}
