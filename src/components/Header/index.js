import { Avatar, Button, Dropdown, Layout, Space, Typography } from 'antd';
import React from 'react';
import { AiOutlineQuestionCircle, AiOutlineDown } from 'react-icons/ai';
import { styled } from 'styled-components';

const flagIcon = {
  deFlag: 'http://purecatamphetamine.github.io/country-flag-icons/3x2/DE.svg',
  usFlag: 'http://purecatamphetamine.github.io/country-flag-icons/3x2/US.svg',
  aeFlag: 'http://purecatamphetamine.github.io/country-flag-icons/3x2/AE.svg',
  cnFlag: 'http://purecatamphetamine.github.io/country-flag-icons/3x2/CN.svg',
  frFlag: 'http://purecatamphetamine.github.io/country-flag-icons/3x2/FR.svg',
  esFlag: 'http://purecatamphetamine.github.io/country-flag-icons/3x2/ES.svg'
};

const { Header: DefaultHeader } = Layout;

const media = {
  logo: '/assets/images/logo-mini.png',
  USAFlag: '/assets/images/flag-usa.png'
};

const Container = styled.div`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-left: 2rem;
  padding-right: 2rem;
`;

const ImageWrapper = styled.img`
  width: 30px;
`;

const LangSwitcher = styled(Button)`
  display: flex;
  align-items: center;
  padding: 0;
  height: auto;

  img {
    width: 36px;
  }
`;

const Header = () => {
  return (
    <>
      <DefaultHeader
        style={{
          padding: '0.5rem',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          position: 'sticky',
          left: 0,
          top: 0,
          width: '100%',
          zIndex: 99
        }}
      >
        <Container>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}
          >
            <img src={media.logo} alt="" />
            <Space size="large">
              <Dropdown
                menu={{
                  items: [
                    {
                      key: 'deFlag',
                      label: (
                        <Typography.Paragraph
                          style={{ marginBottom: 0, padding: '0.2rem' }}
                        >
                          <ImageWrapper src={flagIcon.deFlag} alt="deFlag" />
                          <span style={{ marginLeft: '0.5rem' }}>German</span>
                        </Typography.Paragraph>
                      )
                    },
                    {
                      key: 'usFlag',
                      label: (
                        <Typography.Paragraph
                          style={{ marginBottom: 0, padding: '0.2rem' }}
                        >
                          <ImageWrapper src={flagIcon.usFlag} alt="usFlag" />
                          <span style={{ marginLeft: '0.5rem' }}>English</span>
                        </Typography.Paragraph>
                      )
                    },
                    {
                      key: 'esFlag',
                      label: (
                        <Typography.Paragraph
                          style={{ marginBottom: 0, padding: '0.2rem' }}
                        >
                          <ImageWrapper src={flagIcon.esFlag} alt="esFlag" />
                          <span style={{ marginLeft: '0.5rem' }}>Spanish</span>
                        </Typography.Paragraph>
                      )
                    },
                    {
                      key: 'frFlag',
                      label: (
                        <Typography.Paragraph
                          style={{ marginBottom: 0, padding: '0.2rem' }}
                        >
                          <ImageWrapper src={flagIcon.frFlag} alt="frFlag" />
                          <span style={{ marginLeft: '0.5rem' }}>French</span>
                        </Typography.Paragraph>
                      )
                    },
                    {
                      key: 'cnFlag',
                      label: (
                        <Typography.Paragraph
                          style={{ marginBottom: 0, padding: '0.2rem' }}
                        >
                          <ImageWrapper src={flagIcon.cnFlag} alt="cnFlag" />
                          <span style={{ marginLeft: '0.5rem' }}>Chinese</span>
                        </Typography.Paragraph>
                      )
                    },
                    {
                      key: 'aeFlag',
                      label: (
                        <Typography.Paragraph
                          style={{ marginBottom: 0, padding: '0.2rem' }}
                        >
                          <ImageWrapper src={flagIcon.aeFlag} alt="aeFlag" />
                          <span style={{ marginLeft: '0.5rem' }}>Arabic</span>
                        </Typography.Paragraph>
                      )
                    }
                  ]
                }}
                trigger={['click']}
              >
                <LangSwitcher>
                  <img src={flagIcon.usFlag} alt="" />
                </LangSwitcher>
              </Dropdown>
              <Button
                type="text"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  fontSize: '1rem'
                }}
              >
                <AiOutlineQuestionCircle />
                <span style={{ marginLeft: '0.4rem' }}>Help</span>
              </Button>
              <Dropdown
                menu={{
                  items: [
                    {
                      key: '1',
                      label: <Typography.Text>1st item</Typography.Text>
                    }
                  ]
                }}
                trigger={['click']}
              >
                <Button
                  size="large"
                  style={{ display: 'flex', alignItems: 'center' }}
                  type="primary"
                >
                  <Avatar
                    style={{
                      backgroundColor: '#8E03CF',
                      color: '#fff',
                      marginRight: '0.5rem'
                    }}
                    size="small"
                  >
                    A
                  </Avatar>
                  <AiOutlineDown />
                </Button>
              </Dropdown>
            </Space>
          </div>
        </Container>
      </DefaultHeader>
    </>
  );
};

export default Header;
