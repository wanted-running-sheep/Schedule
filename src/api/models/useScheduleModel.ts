import React, { useState } from 'react';
import { AxiosResponse } from 'axios';
import { apiRequest } from '@/api/instance';
import { ApiUrlEnum } from '@/@types/enum';
import { ScheduleInterface } from 'request';

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

  const checkSavedScheduleData = async (day: string, startTime: number) => {
    try {
      const scheduleResponse: AxiosResponse<ScheduleInterface[]> =
        await apiRequest.get<ScheduleInterface[]>(
          `${ApiUrlEnum.SCHEDULE}?day=${day}&startTime=${startTime}`
        );
      const data = scheduleResponse.data;
      const msg = data.length > 0 ? '중복 일정이 있습니다.' : '';
      const result = data.length > 0 ? false : true;
      return { msg: msg, result: result, data: data };
    } catch (error) {
      return {
        msg: '오류가 발생하였습니다. 관리자에게 문의 하세요.',
        result: false,
      };
    }
  };

  const createtSchedule = async <T>(data: T) => {
    try {
      await apiRequest.post<T>(ApiUrlEnum.SCHEDULE, data);
      return { result: true, msg: '성공적으로 등록 되었습니다.' };
    } catch (error) {
      return {
        result: false,
        msg: '오류가 발생하였습니다. 관리자에게 문의 하세요.',
      };
    }
  };

  const deleteSchedule = async <T>(id: number) => {
    return await apiRequest.delete<T>(ApiUrlEnum.SCHEDULE, id);
  };

  return {
    schedules,
    getScheduleData,
    createtSchedule,
    deleteSchedule,
    checkSavedScheduleData,
  };
};

export default useScheduleModel;
