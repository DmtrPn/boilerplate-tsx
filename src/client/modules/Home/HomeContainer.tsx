import * as React from 'react';
// import { connect } from 'react-redux';
import { Home, HomeProps } from './Home';


export interface HomeContainerProps extends HomeProps, HomeContainerMapProps, HomeContainerDispatchProps {
}

interface HomeContainerMapProps {
}

interface HomeContainerDispatchProps {
}

// @(connect(mapStateToProps, mapDispatchToProps) as any)
export class HomeContainer extends React.Component<HomeContainerProps> {
    constructor(props: HomeContainerProps) {
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
//
// function mapStateToProps(state: any): HomeContainerMapProps {
//     return {
//     };
// }
//
// function mapDispatchToProps(dispatch: any): HomeContainerDispatchProps {
//     return {
//     };
// }
