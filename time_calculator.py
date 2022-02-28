

def add_time(start, duration):
    split = start.split()
    start_time = split[0].split(':')
    duration_time = duration.split(':')
    start_in_minutes = convert_to_minutes(start_time[0], start_time[1])
    duration_in_minutes = convert_to_minutes(
        duration_time[0], duration_time[1])
    number_of_hours = int((start_in_minutes + duration_in_minutes) / 60)
    number_of_minutes = (start_in_minutes + duration_in_minutes) % 60
    print(format_date(number_of_hours, number_of_minutes, split[1]))


def convert_to_minutes(hour, minute):
    return int(hour) * 60 + int(minute)


def format_date(hour, minute, format):
    if(minute < 10):
        minute = f'0{minute}'
    if hour >= 12:
        remainder = hour - 12 if hour > 12 else hour
        if format == 'AM':
            return f'{remainder}:{minute} PM'
        return f'{remainder}:{minute} AM'
    return f'{hour}:{minute} {format}'
