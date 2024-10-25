# QFE and Shor's Algorithm

## Quantum Phase Estimation
There are some special vectors, called *eigenvectors*, where applying the $X$ gate results in the exact same vector, multiplied by a by a number called an *eigenvector*. For example, $\ket{+}$ is an eigenvector of the $X$ gate.
$$
X\ket{+} = \begin{pmatrix} 0 & 1 \\1 &0 \end{pmatrix}  \begin{pmatrix} \frac{1}{\sqrt{2}} \\ \frac{1}{\sqrt{2}} \end{pmatrix} = \begin{pmatrix} \frac{1}{\sqrt{2}} \\ \frac{1}{\sqrt{2}} \end{pmatrix} = \ket{+}
$$

The goal of phase estiamtion is:
<div align="center">

Given a unitary matrix $U$ and an eigenvector $\ket{\psi}$, find $\phi$ such that $U\ket{\psi} = e^{i\phi}\ket{\psi}$

</div>

**Represnting the phase**\
From binary number to decimal number:
$$
\frac{a_1}{2} + \frac{a_2}{4} + \dots + \frac{a_n}{2^n} = 0.a_1a_2\dots a_n
$$



## Shor's algorithm

**Period Finding**
periodic function
$$
f(x) = a^x mod N
$$
where a and N are positve integers, a is less than N, and they have no common factors. The period, or order($r$), is the **Smallest (non zero)** integer such that:
$$
a^r mod N = 1
$$
Shor's solution was to use quantum phase estimation on the unitary operator:
$$
U|y \rangle \equiv |ay \ mod \ N \rangle
$$
