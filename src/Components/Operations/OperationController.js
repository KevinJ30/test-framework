import * as React from "react";
import {OperationItem} from "./OperationItem";
import {Info} from "../Info/Info";

export class OperationController extends React.Component {
    constructor(props) {
        super(props)

        this.store = props.store;
        this.update = this.update.bind(this);
        this.state = {
            operations: []
        }
    }

    componentDidMount() {
        this.store.subscribe(this.update);

        this.setState({
            operations: this.store.getAll()
        });
    }

    update(data) {
        this.setState({
            operations: data
        });
    }

    render() {
        return (
            <div className="container mt-3">
                <div className="row">
                    <div className="col-md-2">
                        <Info operations={this.state.operations} />
                    </div>
                    <div className="col-md-8">
                        <div className="operations__list">
                            <h2>Toutes vos opération</h2>
                            <table className="table table-striped">
                                <thead>
                                <tr>
                                    <th>Checked</th>
                                    <th>Date</th>
                                    <th>Description</th>
                                    <th>Montant de l'opération</th>
                                    <th>Actions</th>
                                </tr>
                                </thead>
                                <tbody>
                                {
                                    this.state.operations.map((operation) => {
                                        return <OperationItem store={this.props.store} item={operation} key={operation.describe} />
                                    })
                                }
                                </tbody>
                            </table>
                            <p className="small text-center">Il y a {this.state.operations.length} opérations enregistré...</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}