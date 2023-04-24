import { fireEvent, logRoles, render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import { CandidateInfo } from '.';
import vector from '../../../../public/images/vector.svg';
import email from '../../../../public/images/email.svg';
import dob from '../../../../public/images/dob.svg';
import phone from '../../../../public/images/phone.svg';
import zipcode from '../../../../public/images/zipcode.svg';
import social from '../../../../public/images/social.svg';
import license from '../../../../public/images/license.svg';
import calendar from '../../../../public/images/calendar.svg';

const candidateDetails = [
  {
    icon: vector,
    property: 'Name',
    value: 'John Smith',
  },
  {
    icon: email,
    property: 'Email',
    value: 'John.smith@checkr.com',
  },
  {
    icon: dob,
    property: 'DOB',
    value: '1990-09-10 (26)',
  },
  {
    icon: phone,
    property: 'Phone',
    value: '(555) 555-5555',
  },
  {
    icon: zipcode,
    property: 'Zipcode',
    value: '94158',
  },
  {
    icon: social,
    property: 'Social Security',
    value: 'XXX-XX-6789',
  },
  {
    icon: license,
    property: 'Drivers License',
    value: 'FTEST1111 (CA)',
  },
  {
    icon: calendar,
    property: 'Created At ',
    value: 'Nov 29,2016 11:05:57 AM',
  },
];
describe('User information', () => {
  test('User information card', async () => {
    render(
      <CandidateInfo
        details={candidateDetails}
        headText="Candidate Information"
      />
    );
    const res = screen.getByTestId('candidateDetails');
    expect(res).toBeInTheDocument();
  });
});
