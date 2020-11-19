import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

const EpisodeCard = (props) => (
  <div>
    <Card style={{width: '18rem'}}>
      <Card.Title>Seaon One Episode One</Card.Title>
      <Card.Img
        variant="top"
        src="https://resizing.flixster.com/uvlFerD6PnEgheaPl-LA9SkqeZw=/fit-in/1152x864/v1.bjsxMzgyNzQ4O2o7MTg2NDY7MTIwMDsxOTIwOzEwODA"
      />
      <Card.Body>
        <Card.Text>
          The pilot episode of what would later become NBC's immensely popular
          sitcom Seinfeld might now appear to most viewers as a "bizarro"
          version of the show they came to know and love. For starters, the show
          was actually called The Seinfeld Chronicles and is completely void of
          Julia Louis-Dreyfuss' character, Elaine Benes. On top of that, instead
          of Kramer, Michael Richards' character is known as Kessler (TV Guide
          listed the character as Hoffman for some reason). Despite these few
          unsettling differences, the episode still follows a trademark plot
          about nothing as Jerry and George discuss the possible reasons why
          Jerry's new girlfriend wants to stay over several nights. Originally
          airing July 5, 1989, "Good News, Bad News" featured guest appearances
          by Lee Garlington and Pamela Brull.
        </Card.Text>
        <Button variant="primary">Watch Episode</Button>
      </Card.Body>
      <Form>
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="YES I'VE SEEN IT" />
        </Form.Group>
      </Form>
    </Card>
  </div>
)

export default EpisodeCard
