import { QuestionCircleOutlined } from '@ant-design/icons';
import { Button, Dropdown, Layout, Space, Typography } from 'antd';
import React from 'react';
import { styled } from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { useUserStore } from 'src/store/user';
import { toast } from 'react-hot-toast';

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
  const navigate = useNavigate();
  const user = useUserStore(state => state.user);
  const logoutUser = useUserStore(state => state.logoutUser);
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
            <img
              src={media.logo}
              alt=""
              style={{ cursor: 'pointer' }}
              onClick={() => {
                navigate('/property/new');
              }}
            />
            <Space size="large">
              <Button
                ghost
                type="primary"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  fontSize: '1rem',
                  padding: '25px 25px',
                  borderRadius: '10px',
                  color: '#000',
                  fontWeight: 600
                }}
                onClick={() => {
                  navigate('/property/new');
                }}
              >
                Add a new property
              </Button>
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
                // trigger={['click']}
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
                <QuestionCircleOutlined />
                <span style={{ marginLeft: '0.4rem' }}>Help</span>
              </Button>
              <Dropdown
                overlayStyle={{
                  width: 'fit-content',
                  minWidth: '200px',
                  padding: '10px'
                }}
                trigger={['click']}
                menu={{
                  items: [
                    {
                      key: 'dashboard',
                      label: (
                        <Link to="/dashboard/groups/groups-home">
                          Dashboard
                        </Link>
                      )
                    },
                    {
                      key: 'logout',
                      label: (
                        <Button
                          danger
                          style={{ width: '100%' }}
                          onClick={() => {
                            localStorage.removeItem('AvJO)%zOxm}S/iy');
                            logoutUser();
                            toast.success('Logout Successful!');
                          }}
                        >
                          Logout
                        </Button>
                      )
                    }
                  ]
                }}
              >
                <Button
                  size="large"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    borderRadius: '10px'
                  }}
                  type="primary"
                >
                  <div
                    style={{
                      height: '30px',
                      width: '30px',
                      borderRadius: '50%',
                      backgroundColor: '#8E03CF',
                      color: '#fff',
                      marginRight: '0.4rem',
                      textTransform: 'uppercase',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      fontWeight: '600'
                    }}
                  >
                    {user?.fName?.charAt(0)}
                  </div>
                  <img
                    src="/arrow.png"
                    alt="arrow"
                    style={{
                      marginLeft: '5px',
                      height: '8px',
                      width: 'fit-content'
                    }}
                  />
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
