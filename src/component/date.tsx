import React from 'react';
import dayjs from 'dayjs';
import { DatePicker } from 'antd';
import DownOutlined from '@ant-design/icons/DownOutlined';

const DateTele = () => (
  <DatePicker
    format={(value) =>
      dayjs(value).isSame(new Date(), 'date')
        ? `Today, ${dayjs(value).format('DD MMM YYYY')}`
        : dayjs(value).format('DD MMM YYYY')
    }
    suffixIcon={<DownOutlined />}
    style={{ color: '#686868', borderColor: '#EFEFEF', borderRadius: 4 }}
  />
);

export default DateTele;
