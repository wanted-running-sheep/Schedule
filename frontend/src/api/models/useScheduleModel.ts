import React, { useState } from 'react';
import { AxiosResponse } from 'axios';
import { apiRequest } from '@/api/instance';
import { ApiUrlEnum } from '@/types/enum';
import { ScheduleInterface } from 'request';
import {
  MSG_REGISTRATION_SUCCESSFUL,
  MSG_REQUEST_FAILED,
} from '@/constants/message';

const useScheduleModel = () => {
  const [schedules, setSchedules] = useState<ScheduleInterface[]>([]);

  const getScheduleData = async () => {
    try {
      const scheduleResponse: AxiosResponse<ScheduleInterface[]> =
        await apiRequest.get<ScheduleInterface[]>(ApiUrlEnum.SCHEDULE);

      if (scheduleResponse) {
        setSchedules(scheduleResponse.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const createSchedule = async <T>(data: T) => {
    try {
      await apiRequest.post<T>(ApiUrlEnum.SCHEDULE, data);
      return { result: true, msg: MSG_REGISTRATION_SUCCESSFUL };
    } catch (error) {
      return {
        result: false,
        msg: MSG_REQUEST_FAILED,
      };
    }
  };

  const deleteSchedule = async (id: number) => {
    return await apiRequest.delete(ApiUrlEnum.SCHEDULE, id);
  };

  return {
    schedules,
    getScheduleData,
    createSchedule,
    deleteSchedule,
  };
};

export default useScheduleModel;
