import * as React from 'react';

import { Home, HomeProps } from './Home';

interface Props extends HomeProps {
}

export class HomeContainer extends React.Component<Props> {
    constructor(props: Props) {
        super(props);
    }

    public render() {
        return (
            <Home
                {...this.props}
            />
        );
    }
}
