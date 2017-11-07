import React, { Component } from 'react'
import { Header, Image, Table } from 'semantic-ui-react'

class CamperList extends Component {
  // state = { camperList: [] }
  //
  // async componentDidMount() {
  //   const p = await fetch(
  //     'https://fcctop100.herokuapp.com/api/fccusers/top/recent',
  //   )
  //   const stuff = await p.json()
  //   console.log(stuff)
  //   this.setState({ camperList: stuff })
  // }

  // handleHeaderClick = sortBy => {
  //   if (sortBy === this.state.sortBy)
  //     this.setState({ asc: this.state.asc * -1 })
  //   else this.setState({ asc: 1, sortBy })
  // }

  render() {
    // const { camperList } = this.state
    const { changeSortBy, sortBy, asc, campers = [] } = this.props
    return (
      <Table basic="very" celled collapsing>
        <Table.Header className={'table-header'}>
          <Table.Row>
            <Table.HeaderCell
              onClick={() => changeSortBy({ sortBy: 'username' })}
            >
              Person
            </Table.HeaderCell>
            <Table.HeaderCell
              onClick={() => changeSortBy({ sortBy: 'alltime' })}
            >
              All Time High
            </Table.HeaderCell>
            <Table.HeaderCell
              onClick={() => changeSortBy({ sortBy: 'lastUpdate' })}
            >
              Last Update
            </Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {campers
            .sort((campera, camperb) => {
              return campera[sortBy] > camperb[sortBy] ? asc * 1 : asc * -1
            })
            .map(camper => {
              return (
                <Table.Row key={camper.username}>
                  <Table.Cell>
                    <Header as="h4" image>
                      <Image src={camper.img} shape="rounded" size="mini" />
                      <Header.Content>
                        {camper.username}
                        <Header.Subheader>{camper.recent}</Header.Subheader>
                      </Header.Content>
                    </Header>
                  </Table.Cell>
                  <Table.Cell>{camper.alltime}</Table.Cell>
                  <Table.Cell>
                    {' '}
                    {new Date(camper.lastUpdate).toString()}
                  </Table.Cell>
                </Table.Row>
              )
            })}
        </Table.Body>
      </Table>
    )
  }
}

export default CamperList
