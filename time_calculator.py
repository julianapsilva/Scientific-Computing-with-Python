

def add_time(start, duration, day=None):
    number_of_days = 0
    split = start.split()
    start_time = split[0].split(':')
    duration_time = duration.split(':')
    start_in_minutes = convert_to_minutes(start_time[0], start_time[1])
    duration_in_minutes = convert_to_minutes(
        duration_time[0], duration_time[1])
    number_of_hours = int((start_in_minutes + duration_in_minutes) / 60)
    number_of_minutes = (start_in_minutes + duration_in_minutes) % 60
    if(number_of_hours > 24):
        number_of_days = int(number_of_hours / 24)
        number_of_hours -= number_of_days * 24
    print(format_date(number_of_hours,
                      number_of_minutes, split[1], number_of_days, day))


def convert_to_minutes(hour, minute):
    return int(hour) * 60 + int(minute)


def get_day_of_week(day, offset):
    if day is None:
        return ''
    days = ['Monday', 'Tuesday', 'Wednesday',
            'Thursday', 'Friday', 'Saturday', 'Sunday']
    day = day.title()
    index = days.index(day)
    return f', {days[index + offset]}' if index + offset < 7 else f', {days[(index + offset) % 7]}'


def format_date(hour, minute, format, number_of_days, day=''):
    day_of_week = day if day is not None else ''
    if(minute < 10):
        minute = f'0{minute}'
    if hour >= 12:
        remainder = hour - 12 if hour > 12 else hour
        day_of_week = get_day_of_week(day, 0)
        if format == 'AM':
            return f'{remainder}:{minute} PM{day_of_week}'
        elif number_of_days == 0:
            day_of_week = get_day_of_week(day, 1)
            return f'{remainder}:{minute} AM{day_of_week} (next day)'
        else:
            day_of_week = get_day_of_week(day, number_of_days+1)
            return f'{remainder}:{minute} AM{day_of_week} ({number_of_days+1} days later)'
    return f'{hour}:{minute} {format}{day_of_week}'



add_time("8:16 PM", "466:02", "tuesday")