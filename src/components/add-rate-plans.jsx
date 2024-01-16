import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';

function AddRatePlan({ content, setSelectedPlan }) {
  const navigate = useNavigate();
  return (
    <div style={{ padding: '35px' }}>
      <Button
        type="primary"
        ghost
        onClick={() => {
          navigate(-1);
        }}
      >
        Back
      </Button>
      <h2>Add a New Rate Plan</h2>
      <h3>Increase Bookings and Reduce Cancellations</h3>
      <p>
        These Rate Plans will give You a Solid Foundation for Your Pricing
        Strategy.
      </p>
      <div
        style={{
          background: '#fff',
          borderRadius: '10px',
          border: '1px solid #bbbdc1',
          marginTop: '20px'
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            padding: '20px',
            borderBottom: '1px solid #bbbdc1',
            alignItems: 'center'
          }}
        >
          <h4>Weekly</h4>
          <p>For booking of stay length more than 7 days.</p>
          <Button
            size="large"
            ghost
            type="primary"
            style={{
              fontSize: '14px',
              fontWeight: '700',
              height: 'fit-content',
              paddingBlock: '10px',
              paddingInline: '20px'
            }}
            onClick={() => {
              setSelectedPlan({
                title: 'Weekly Plan',
                description: 'For booking of stay length of 7 days or more.',
                plan: 'weeklyPlanDiscount',
                discount: content?.weeklyPlanDiscount || 0
              });
            }}
          >
            Add Rate Plan
          </Button>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            padding: '20px',
            alignItems: 'center',
            borderBottom: '1px solid #bbbdc1'
          }}
        >
          <h4>Monthly</h4>
          <p>For booking of stay length more than 30 days.</p>
          <Button
            size="large"
            ghost
            type="primary"
            style={{
              fontSize: '14px',
              fontWeight: '700',
              height: 'fit-content',
              paddingBlock: '10px',
              paddingInline: '20px'
            }}
            onClick={() => {
              setSelectedPlan({
                title: 'Monthly Plan',
                description: 'For booking of stay length of 30 days or more.',
                plan: 'monthlyPlanDiscount',
                discount: content?.monthlyPlanDiscount || 0
              });
            }}
          >
            Add Rate Plan
          </Button>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            padding: '20px',
            alignItems: 'center'
          }}
        >
          <h4>Non-Redundable</h4>
          <p>For bookings with no refund on cancellation.</p>
          <Button
            size="large"
            ghost
            type="primary"
            style={{
              fontSize: '14px',
              fontWeight: '700',
              height: 'fit-content',
              paddingBlock: '10px',
              paddingInline: '20px'
            }}
            onClick={() => {
              setSelectedPlan({
                title: 'Non-Refundable Plan',
                description: 'For booking with no-refund on cancellation.',
                plan: 'nonRefundableDiscount',
                discount: content?.nonRefundableDiscount || 0
              });
            }}
          >
            Add Rate Plan
          </Button>
        </div>
      </div>
    </div>
  );
}

export default AddRatePlan;
