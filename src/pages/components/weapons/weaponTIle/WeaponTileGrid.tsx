import { Col, Container, Row } from "react-bootstrap"
import { getKey } from "../../../../functions/keys"
import WeaponTile, { WeaponTileProps } from "./WeaponTile"

export const WeaponTileGrid = ({items}:{items:WeaponTileProps[]}) => {
    return(
      <Container>
      <Row>
        {items.map((o) => (
          <Col key={getKey()} xs={12} md={6} lg={4}><WeaponTile key={o.weapon.name} weapon={o.weapon} background={o.background} type={o.type} /></Col>))}
      </Row>
      </Container>)
  }

  export default WeaponTileGrid;