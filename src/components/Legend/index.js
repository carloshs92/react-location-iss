import React, {Component, Fragment} from 'react';
import ISSService from "../../services/iss.service";
import './index.css';

class Legend extends Component {

    constructor(props) {
        super(props);
        this.state = {
            people: [],
        }
    }

    componentDidMount () {
        this.getPeople();
    }

    getPeople () {
        ISSService.getPeopleInSpace()
            .then( (response) => {
                const people = response.people;
                this.setState({ people })
            }).catch(() => {

        })
    }

    render() {
        return (
            <Fragment>
                <ol className={'Legend'}>
                    {
                        this.state.people.map((element, index) => {
                            return (
                                <li key={index}>{element.name}</li>
                            )
                        })
                    }
                </ol>
            </Fragment>
        );
    }
}

export default Legend;