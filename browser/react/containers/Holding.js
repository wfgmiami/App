import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import ContentContainer from './ContentContainer';
import store from '../store';
import { loadHoldings } from '../action-creators/holdingsAction';
import reactDataGrid from '../packages/react-data-grid';
import reactDataGridAddons from '../packages/react-data-grid-addons';
import Modal from './Modal.js';

const Promise = require('es6-promise-promise');

class Holding extends Component{
	constructor( props ){
		super( props );

	}

	componentDidMount(){
		store.dispatch( loadHoldings() );
	}


	render(){
    console.log('.......in App.js, state',this.state);
		return(
			<div className="container-fluid">
					<div className="row">
						<div className="col-sm-12">
							<Modal>
							<div>close</div>
								<ContentContainer/>
							</Modal>
						</div>
					</div>
			</div>
		)
	}
}


export default Holding;
