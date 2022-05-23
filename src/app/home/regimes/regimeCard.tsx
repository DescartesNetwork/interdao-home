import { useMemo } from "react";
import { useSelector } from "react-redux";

import { Image, Col, Row, Space, Typography, Card } from "antd";

import { AppState } from "store";
import { INTERDAO_URL } from "app/constants";

type RegimeCardProps = {
  title: string;
  desc: string;
  bg: string;
};

const PADDING_CARD = 24;
const PADDING_PAGE = 39; // padding 24 + width scroll bar 15

const RegimeCard = ({ title, desc, bg }: RegimeCardProps) => {
  const {
    ui: { width },
  } = useSelector((state: AppState) => state);

  const imgHeight = useMemo(() => {
    if (width > 991)
      return (
        (3 *
          (((width - PADDING_PAGE - PADDING_CARD) / 2 - PADDING_CARD) / 2 -
            12)) /
        4
      );
    if (width <= 767)
      return (3 * (width - PADDING_PAGE - PADDING_CARD - PADDING_CARD)) / 4;
    return (3 * ((width - PADDING_PAGE - PADDING_CARD) / 2 - PADDING_CARD)) / 4;
  }, [width]);

  return (
    <Card
      bordered={false}
      bodyStyle={{ padding: 0 }}
      style={{ background: "transparent" }}
      className="card-regime"
      onClick={() => window.open(INTERDAO_URL, "_blank")}
    >
      <Row gutter={[20, 20]}>
        <Col span={24}>
          <Image
            preview={false}
            src={bg}
            style={{
              height: imgHeight,
              borderRadius: 4,
            }}
          />
        </Col>
        <Col span={24}>
          <Space direction="vertical" style={{ minHeight: 100 }}>
            <Typography.Title level={1}>{title}</Typography.Title>
            <Typography.Paragraph
              style={{ marginBottom: 0 }}
              ellipsis={{ rows: 2 }}
              type="secondary"
            >
              {desc}
            </Typography.Paragraph>
          </Space>
        </Col>
        <Col span={24}>
          <Typography.Text underline>Get started</Typography.Text>
        </Col>
      </Row>
    </Card>
  );
};

export default RegimeCard;
