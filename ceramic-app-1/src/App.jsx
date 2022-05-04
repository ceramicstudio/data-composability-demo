import React from 'react';
import { Provider } from '@self.id/framework';

const aliases = {
    definitions: {
        basicProfile: 'kjzl6cwe1jw145cjbeko9kil8g9bxszjhyde21ob8epxuxkaon1izyqsu8wgcic',
        sitePrefs: 'kjzl6cwe1jw147ep75anxjql3sw00fzyjkhhntzhspb0i9fokcayrd4h9wf07eb',
    },
    schemas: {
        BasicProfile: 'ceramic://k3y52l7qbv1frxt706gqfzmq6cbqdkptzk8uudaryhlkf6ly9vx21hqu4r6k1jqio',
        myPrefs: 'ceramic://k3y52l7qbv1fry4kxdsl35uh19plj4xoinylx3aewyfbgx8zjyip801s7oiwc55a8',
    },
    tiles: {
    },
}



export default function App({ children }) {

    return <Provider client={{ ceramic: 'testnet-clay', aliases }}>{children}</Provider>
}

