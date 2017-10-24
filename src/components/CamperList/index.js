import React, { Component } from 'react'
import { Header, Image, Table } from 'semantic-ui-react'


class CamperList extends Component {
  state = { camperList: [] }
  async componentDidMount() {
    const p = await fetch('https://fcctop100.herokuapp.com/api/fccusers/top/recent')
    const stuff = await p.json()
    console.log(stuff)
    this.setState({ camperList: stuff })
  }


  /*


alltime
:
6294

img
:
"https://avatars2.githubusercontent.com/u/11348778?v=4"

lastUpdate
:
"2017-10-08T17:24:28.183Z"

recent
:
125

username
:
"Manish-Giri"


   */

  render() {
    const { camperList } = this.state
    return (
      <Table basic='very' celled collapsing>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Person</Table.HeaderCell>
            <Table.HeaderCell>All Time High</Table.HeaderCell>
            <Table.HeaderCell></Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {camperList.sort( (campera, camperb) => {
            return new Date(campera.lastUpdate) < new Date(camperb.lastUpdate) ? -1 : 1
          }).reverse().map( (camper) => {
          return <Table.Row key={camper.username}>
            <Table.Cell>
              <Header as='h4' image>
                <Image src={camper.img} shape='rounded'
                       size='mini' />
                <Header.Content>
                  {camper.username}
                  <Header.Subheader>{camper.recent}</Header.Subheader>
                </Header.Content>
              </Header>
            </Table.Cell>
            <Table.Cell>
              {camper.alltime}
            </Table.Cell>
            <Table.Cell> {new Date(camper.lastUpdate).toString()}</Table.Cell>
          </Table.Row>

          })}

        </Table.Body>
      </Table>
    )
  }
}

export default CamperList