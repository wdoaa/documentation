---
sidebar_position: 20
---

# Heatsink 4012 Tutorial

Heatsink 4012 is a cooling fan specially tailored for ROCK 5B. The installation tutorial is shown in the figure:

- Paste the cooling silicone on the radiator;

![Heatsink 4012](/img/rock5b/heatsink4012-use-1.webp)

- Apply thermal silica gel on the chip;

![Heatsink 4012](/img/rock5b/heatsink4012-use-2.webp)

- Align the buckle with the exposed copper area of ROCK 5B and press down;
- Connect the power cord.

![Heatsink 4012](/img/rock5b/heatsink4012-use-3.webp)

## Configuration

The operating system has three modes by default：

- **power_allocator**: The system defaults to fanless mode or DC fan mode. Make sure that the machine can still work stably without a cooling fan;
- **user_space**: Manually control cooling fan mode. Users can control the speed of the cooling fan through the command terminal according to your needs;
- **step_wise**: automatic temperature adjustment mode. When the temperature of the CPU is below 60°C, the cooling fan is in a dormant state; And when the temperature of the CPU reaches above 60°C, the cooling fan starts to work.
  **Note: When ROCK 5B is in shutdown or sleep state, the cooling fan does not work.**

You can use the command terminal by "`retsup->Hardware`->`Thermal governor`", then use the `space bar` to select the mode, the specific operation is as follows:

Press "Ctrl + Alt + T" simultaneously to open a terminal, run `rsetup` command as below:

```
radxa@rock-5b:~$ rsetup
```

Typing the password and select `Hardware` to rsetup tool interface.  
Select `Hardware`:

```
Please select an option below:
        System Maintenance
        Hardware
        Overlays
        Connectivity
        User Settings
        Localization
        About
        <Ok>            <Cancel>
```

Then, select `Thermal governor`.

```
Manage on-board hardware:
        Video capture devices
        GPIO LEDs
        Thermal governor
        Configure DSI display mirroring
        <Ok>            <Cancel>
```

Select mode with `spacebar`

```bash
┌─────────────────────────────────────────┤ RSETUP ├───────────────────────────────────────────────┐
│ Please select the thermal governor.                                                              │
│ Recommendation: fanless or DC fan => power_allocator | PWM fan => step_wise                      │
│                                                                                                  │
│    (*) power_allocator                                                                           │
│    ( ) user_space                                                                                │
│    ( ) step_wise                                                                                 │
│    ( ) fair_share                                                                                │
│                                                                                                  │
│                                                                                                  │
│                                                                                                  │
│                                                                                                  │
│                                                                                                  │
│                                                                                                  │
│                                                                                                  │
│                                                                                                  │
│                                                                                                  │
│                                                                                                  │
│                                 <ok>                        <Cancel>                             │
└──────────────────────────────────────────────────────────────────────────────────────────────────│
```

If you choose `user_space` mode, you need to manually control the cooling fan.

Find the node of the fan device `pwm-fan`:

```
cat /sys/class/thermal/cooling_device*/type
```

For example, the node of the pwm fan is `cooling_device1`:

```
radxa@rock-5b: cat /sys/class/thermal/cooling_device1/type
pwm-fan
```

**Note: The following operations take `cooling_device1` as an example.**

Directly open the highest speed:

```
radxa@rock-5b:~$ sudo cp /sys/class/thermal/cooling_device1/max_state /sys/class/thermal/cooling_device1/cur_state
```

You can check how many speeds the cooling fan supports through the following:

```
radxa@rock-5b:~$ cat /sys/class/thermal/cooling_device1/max_state
4
```

If you want to select the third speed, follow the instructions below:

```
echo 3 | sudo tee /sys/class/thermal/cooling_device1/cur_state
```

If you want to use another speed gear, you just need to change the number. If you want to turn off the cooling fan, just select 0 for the speed gear.

```
echo 0 | sudo tee /sys/class/thermal/cooling_device1/cur_state
```
