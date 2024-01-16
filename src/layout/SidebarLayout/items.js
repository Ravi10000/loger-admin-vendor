import { useState, useEffect } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import {
  BellOutlined,
  CalendarOutlined,
  DollarOutlined,
  HomeOutlined,
  MessageOutlined,
  PieChartOutlined,
  StarOutlined,
  TagsOutlined
} from '@ant-design/icons';
import { match } from 'path-to-regexp';

// const items = [
//   {
//     path: '/dashboard/groups/groups-home',
//     label: 'Home Group',
//     icon: <HomeOutlined />,
//     key: 'groupsHome'
//   },
//   {
//     path: '/dashboard/groups/reservations',
//     label: 'Reservations',
//     icon: <BellOutlined />,
//     key: 'groupsReservations'
//   },
//   {
//     label: 'Analytics',
//     path: '/dashboard/groups/analytics',
//     icon: <PieChartOutlined />,
//     key: 'groupsAnalytics',
//     children: [
//       {
//         path: '/dashboard/groups/sales-statistics',
//         label: 'Sales Statics',
//         key: 'groupsSalesStatics'
//       }
//     ]
//   },
//   {
//     path: '/dashboard/groups/finance',
//     label: 'Finance',
//     icon: <DollarOutlined />,
//     key: 'groupsFinance'
//   },
//   {
//     path: '/dashboard/groups/reviews',
//     label: 'Reviews',
//     icon: <StarOutlined />,
//     key: 'groupsReviews'
//   },
//   {
//     path: '/dashboard/manage/home',
//     icon: <HomeOutlined />,
//     label: 'Home',
//     key: 'manageHome'
//   },
//   {
//     path: '/dashboard/manage/rate-and-availability',
//     icon: <CalendarOutlined />,
//     label: 'Rate & Availability',
//     key: 'rateAndAvailability',
//     children: [
//       {
//         path: '/dashboard/manage/rate-and-availability/calendar',
//         label: 'Calendar',
//         key: 'manageCalendar'
//       },
//       {
//         path: '/dashboard/manage/rate-plan',
//         label: 'Rate Plan',
//         key: 'manageRatePlan'
//       },
//       {
//         path: '/dashboard/manage/sync-calendars',
//         label: 'Sync Calendars',
//         key: 'manageSyncCalendars'
//       }
//     ]
//   },
//   {
//     path: '/dashboard/manage/reservations',
//     icon: <BellOutlined />,
//     label: 'Reservations',
//     key: 'manageReservations'
//   },
//   {
//     path: '/dashboard/manage/reviews',
//     icon: <StarOutlined />,
//     label: 'Reviews',
//     key: 'manageReviews'
//   },
//   {
//     path: '/dashboard/manage/promotions',
//     icon: <TagsOutlined />,
//     label: 'Promotions',
//     key: 'managePromotions'
//   },
//   {
//     path: '/dashboard/manage/property',
//     icon: <HomeOutlined />,
//     label: 'Property',
//     key: 'manageProperty',
//     children: [
//       {
//         path: '/dashboard/manage/property/general-info',
//         label: 'General Info',
//         key: 'manageGeneralInfo'
//       },
//       {
//         path: '/dashboard/manage/property/charges',
//         label: 'VAT/Tax/Charges',
//         key: 'manageCharges'
//       },
//       {
//         path: '/dashboard/manage/property/photos',
//         label: 'Photos',
//         key: 'managePhotos'
//       },
//       {
//         path: '/dashboard/manage/property/policies',
//         label: 'Policies',
//         key: 'managePolicies'
//       },
//       {
//         path: '/dashboard/manage/property/facilities-and-services',
//         label: 'Facilities & Services',
//         key: 'manageFacilitiesAndServices'
//       }
//     ]
//   },
//   {
//     path: '/dashboard/manage/inbox',
//     icon: <MessageOutlined />,
//     label: 'Inbox',
//     key: 'manageInbox',
//     children: [
//       {
//         path: '/dashboard/manage/inbox/reservation-message',
//         label: 'Reservation Message',
//         key: 'manageReservationMessage'
//       },
//       {
//         path: '/dashboard/manage/inbox/guests-question-answer',
//         label: 'Guests Q&A',
//         key: 'manageGuestsQ&A'
//       }
//     ]
//   },
//   {
//     path: '/dashboard/manage/finance',
//     icon: <TagsOutlined />,
//     label: 'Finance',
//     key: 'manageFinance',
//     children: [
//       {
//         path: '/dashboard/manage/payout-payment',
//         label: 'Payout Payment',
//         key: 'managePayoutPayment'
//       },
//       {
//         path: '/dashboard/manage/documents-and-invoices',
//         label: 'Documents & Invoices',
//         key: 'manageDocumentsAndInvoices'
//       }
//     ]
//   }
// ];

const urlMatch = match('/dashboard/:tab(groups|manage)', {
  decode: decodeURIComponent,
  end: false
});

function useMenuItems() {
  const [menuItems, setMenuItems] = useState([]);
  const { pathname } = useLocation();
  const [searchParams] = useSearchParams();
  let propertyId = searchParams.get('propertyId');
  propertyId =
    propertyId && propertyId !== 'null' ? '?propertyId=' + propertyId : '';
  console.log({ propertyId });

  const items = [
    {
      path: '/dashboard/groups/groups-home' + propertyId,
      label: 'Home Group',
      icon: <HomeOutlined />,
      key: 'groupsHome'
    },
    {
      path: '/dashboard/groups/reservations' + propertyId,
      label: 'Reservations',
      icon: <BellOutlined />,
      key: 'groupsReservations'
    },
    {
      label: 'Analytics',
      path: '/dashboard/groups/analytics',
      icon: <PieChartOutlined />,
      key: 'groupsAnalytics',
      children: [
        {
          path: '/dashboard/groups/sales-statistics',
          label: 'Sales Statics',
          key: 'groupsSalesStatics'
        }
      ]
    },
    {
      path: '/dashboard/groups/finance' + propertyId,
      label: 'Finance',
      icon: <DollarOutlined />,
      key: 'groupsFinance'
    },
    {
      path: '/dashboard/groups/reviews' + propertyId,
      label: 'Reviews',
      icon: <StarOutlined />,
      key: 'groupsReviews'
    },
    {
      path: '/dashboard/manage/home' + propertyId,
      icon: <HomeOutlined />,
      label: 'Home',
      key: 'manageHome'
    },
    {
      path: '/dashboard/manage/rate-and-availability' + propertyId,
      icon: <CalendarOutlined />,
      label: 'Rate & Availability',
      key: 'rateAndAvailability',
      children: [
        {
          path: '/dashboard/manage/rate-and-availability/calendar' + propertyId,
          label: 'Calendar',
          key: 'manageCalendar'
        },
        {
          path: '/dashboard/manage/rate-and-availability/rate-plan' + propertyId,
          label: 'Rate Plan',
          key: 'manageRatePlan'
        },
        {
          path: '/dashboard/manage/rate-and-availability/sync-calender' + propertyId,
          label: 'Sync Calendars',
          key: 'manageSyncCalendars'
        }
      ]
    },
    {
      path: '/dashboard/manage/reservations' + propertyId,
      icon: <BellOutlined />,
      label: 'Reservations',
      key: 'manageReservations'
    },
    {
      path: '/dashboard/manage/reviews' + propertyId,
      icon: <StarOutlined />,
      label: 'Reviews',
      key: 'manageReviews'
    },
    {
      path: '/dashboard/manage/promotions' + propertyId,
      icon: <TagsOutlined />,
      label: 'Promotions',
      key: 'managePromotions'
    },
    {
      path: '/dashboard/manage/property' + propertyId,
      icon: <HomeOutlined />,
      label: 'Property',
      key: 'manageProperty',
      children: [
        {
          path: '/dashboard/manage/property/general-info' + propertyId,
          label: 'General Info',
          key: 'manageGeneralInfo'
        },
        {
          path: '/dashboard/manage/property/charges' + propertyId,
          label: 'VAT/Tax/Charges',
          key: 'manageCharges'
        },
        {
          path: '/dashboard/manage/property/photos' + propertyId,
          label: 'Photos',
          key: 'managePhotos'
        },
        {
          path: '/dashboard/manage/property/policies' + propertyId,
          label: 'Policies',
          key: 'managePolicies'
        },
        {
          path:
            '/dashboard/manage/property/facilities-and-services' + propertyId,
          label: 'Facilities & Services',
          key: 'manageFacilitiesAndServices'
        }
      ]
    },
    {
      path: '/dashboard/manage/inbox' + propertyId,
      icon: <MessageOutlined />,
      label: 'Inbox',
      key: 'manageInbox',
      children: [
        {
          path: '/dashboard/manage/inbox/reservation-message' + propertyId,
          label: 'Reservation Message',
          key: 'manageReservationMessage'
        },
        {
          path: '/dashboard/manage/inbox/guests-question-answer' + propertyId,
          label: 'Guests Q&A',
          key: 'manageGuestsQ&A'
        }
      ]
    },
    {
      path: '/dashboard/manage/finance' + propertyId,
      icon: <TagsOutlined />,
      label: 'Finance',
      key: 'manageFinance',
      children: [
        {
          path: '/dashboard/manage/payout-payment' + propertyId,
          label: 'Payout Payment',
          key: 'managePayoutPayment'
        },
        {
          path: '/dashboard/manage/documents-and-invoices' + propertyId,
          label: 'Documents & Invoices',
          key: 'manageDocumentsAndInvoices'
        }
      ]
    }
  ];

  useEffect(() => {
    // const handlePathChange = () => {
    //   console.log('changing propertyId');
    //   if (propertyId && propertyId !== 'null') {
    //     console.log('property id is not null', propertyId);
    //     setTimeout(() => {
    //       setSearchParams(searchParams => {
    //         searchParams.set('propertyId', propertyId);
    //         return searchParams;
    //       });
    //     });
    //   }
    // };
    const list = items
      .filter(({ path }) => {
        const isPathMatch = urlMatch(path);
        const pathNameMatch = urlMatch(pathname);
        return isPathMatch && pathNameMatch
          ? isPathMatch.params.tab === pathNameMatch.params.tab
          : false;
      })
      .map(({ path, icon, label, children, key }) => {
        return children
          ? {
              label,
              key,
              icon,
              children: children.map(({ path, label, key }) => ({
                label: (
                  <Link
                    to={path}
                    // to={
                    //   path + (propertyId && propertyId !== 'null')
                    //     ? `?propertyId=${propertyId}`
                    //     : ''
                    // }
                    // onClick={handlePathChange}
                  >
                    {label}
                  </Link>
                ),
                key
              }))
            }
          : {
              label: (
                <Link
                  // onClick={handlePathChange}
                  to={path}
                  // to={
                  //   path + (propertyId && propertyId !== 'null')
                  //     ? `?propertyId=${propertyId}`
                  //     : ''
                  // }
                >
                  {label}
                </Link>
              ),
              key,
              icon
            };
      });

    setMenuItems(list);
  }, [pathname, propertyId]);

  return [menuItems];
}

export default useMenuItems;
