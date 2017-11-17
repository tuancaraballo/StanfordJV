import React from 'react';
import {Input, Row, Form, ListGroup, ListGroupItem , FormGroup,Label} from 'reactstrap';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import {fetchPosts} from '../actions/actions.js'
import _ from 'lodash';


let listsStyleWrapper = {
  marginTop: "1em"
}

class SearchList extends React.Component {
  constructor(props) {
    super(props);
    this.displayPosts = this.displayPosts.bind(this);
  }
  componentDidMount(){
    console.log("Component mounted");
    this.props.fetchPosts();
  }

  displayPosts(){
    if(_.isEmpty(this.props.posts)) {
      return (<h4> No posts at the moment </h4>)
    }
    //let titles = ["AFRICANDO", "CASSANDRA", "PROJECTBINARIO"];
    return (
      _.map(this.props.posts, (post, key) => {
        debugger;
        return (
          <div style={listsStyleWrapper} key={key}>
                <h6 className="postTitle"> {post.title} </h6>
                <p> {post.Description}</p>
          </div>
        );
      }));
    }

      // _.forOwn(this.props.posts, function(value, key) {
      //   debugger;
      //     console.log("========");
      //     console.log(value,key);
      //  } ));
      //   return(
      //     <div style={listsStyleWrapper}>
      //       <h6 className="postTitle"> {data.title} </h6>
      //       <p> {data.description}</p>
      //     </div>
      // );
      // })
    // );
  // }
  render() {
    console.log("Props", this.props);
    console.log("State", this.state);
    return (
      <div >
        <Form className="inputSearchWrapper" >
          <FormGroup className="inputSearch">
            <Input type="email" name="email" id="exampleEmail" placeholder="Search for a project you would like to join" />
           </FormGroup>
        </Form>

        {this.displayPosts()}
      </div>
    );
  }
}

function mapStateToProps({posts}){
  console.log("MapStateToProps", posts);
  return {posts};
}
function mapDispatchToProps(dispatch){
  console.log("mapDispatchToProps", fetchPosts);
  return bindActionCreators({fetchPosts: fetchPosts}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchList);

//className="inputSearch"
