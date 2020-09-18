import React, { Component } from "react";
import axios from "axios";

class BootcampDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bootcamp: {},
    };
  }
  async componentDidMount() {
    const response = await axios.get(
      `http://www.endava-bootcamp.com/api/v1/bootcamps/${this.props.match.params.id}`,
      {
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      }
    );
    this.setState({ bootcamp: response.data.data });
    console.log(response.data.data, "raspuns");
  }

  render() {
    console.log(this.props);
    const {
      match: {
        params: { id: urlID },
      },
    } = this.props;
    const {
      id: bootcampID,
      name,
      description,
      website,
      phone,
      email,
      careers,
    } = this.state.bootcamp;
    // console.log('id', id)
    return (
      <div>
        <p>Bootcamp with id(from URL): {urlID}</p>
        <p>{name}</p>
        <p>BootcampId: {bootcampID}</p>
        <p>Description: {description}</p>
        <p>Website: {website}</p>
        <p>Phone: {phone}</p>
        <p>Email:{email}</p>
        <p>Careers: {careers}</p>
      </div>
    );
  }
}

export default BootcampDetails;
